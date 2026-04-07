#!/usr/bin/env node
/**
 * import-to-supabase.mjs
 *
 * Reads clients.json and insurance.json and imports data into Supabase:
 *   - One record in `individual_clients` per unique policyholder (deduplicated by NIF)
 *   - One record in `policies` per insurance policy, linked to individual_client_id
 *
 * Required environment variables:
 *   SUPABASE_URL         – e.g. https://xxxx.supabase.co
 *   SUPABASE_SERVICE_KEY – service role key (bypasses RLS)
 */

import { createClient } from "@supabase/supabase-js";
import { readFile } from "fs/promises";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Error: SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function readJSON(path) {
  const raw = await readFile(path, "utf-8");
  return JSON.parse(raw);
}

async function main() {
  const [clients, policies] = await Promise.all([
    readJSON("clients.json"),
    readJSON("insurance.json"),
  ]);

  // --- 1. Build unique client map (deduplicate by NIF) ---
  // Source of truth: insurance.json tomador fields (richer data than clients.json)
  // Fall back to clients.json for portal users whose NIF matches.

  const clientMap = new Map(); // NIF → client object

  // Seed from vault-clients (portal users)
  for (const c of clients) {
    if (c.nif) {
      clientMap.set(c.nif, {
        nif: c.nif,
        name: c.name,
        email: c.email || null,
        address: c.morada || null,
        postal_code: c.codigoPostal || null,
        city: null,
        phone: c.telemovel || null,
        vault_username: c.username,
        vault_codigo_cliente: null,
      });
    }
  }

  // Overlay / add from insurance records (may have richer address/phone data)
  for (const p of policies) {
    const nif = p.tomadorNIF;
    if (!nif) continue;

    if (!clientMap.has(nif)) {
      clientMap.set(nif, {
        nif,
        name: p.tomadorNome,
        email: p.tomadorEmail || null,
        address: p.tomadorMorada || null,
        postal_code: p.tomadorCodigoPostal || null,
        city: p.tomadorCidade || null,
        phone: p.tomadorTelefone || null,
        vault_username: null,
        vault_codigo_cliente: p.codigoCliente,
      });
    } else {
      // Enrich existing record with insurance data if fields are missing
      const existing = clientMap.get(nif);
      if (!existing.address && p.tomadorMorada) existing.address = p.tomadorMorada;
      if (!existing.postal_code && p.tomadorCodigoPostal) existing.postal_code = p.tomadorCodigoPostal;
      if (!existing.city && p.tomadorCidade) existing.city = p.tomadorCidade;
      if (!existing.phone && p.tomadorTelefone) existing.phone = p.tomadorTelefone;
      if (!existing.email && p.tomadorEmail) existing.email = p.tomadorEmail;
      if (!existing.vault_codigo_cliente && p.codigoCliente) existing.vault_codigo_cliente = p.codigoCliente;
    }
  }

  const uniqueClients = [...clientMap.values()];
  console.log(`\nClientes únicos a importar: ${uniqueClients.length}`);

  // --- 2. Insert individual_clients ---
  const { data: insertedClients, error: clientsError } = await supabase
    .from("individual_clients")
    .insert(uniqueClients)
    .select("id, nif");

  if (clientsError) {
    console.error("Erro ao inserir clientes:", clientsError.message);
    process.exit(1);
  }

  // Build NIF → Supabase id lookup
  const nifToId = new Map(insertedClients.map(c => [c.nif, c.id]));
  console.log(`✓ ${insertedClients.length} clientes inseridos em individual_clients`);

  // --- 3. Build policies rows ---
  const policyRows = [];

  for (const p of policies) {
    const clientId = nifToId.get(p.tomadorNIF);
    if (!clientId) {
      console.warn(`  Aviso: NIF "${p.tomadorNIF}" (${p.tomadorNome}) não encontrado — apólice ${p.numeroApolice} ignorada`);
      continue;
    }

    policyRows.push({
      individual_client_id: clientId,
      numero_apolice: p.numeroApolice,
      ramo: p.ramo || null,
      seguradora: p.seguradora || null,
      premio_total: p.premioTotal ?? null,
      frequencia_pagamento: p.frequenciaPagamento || null,
      data_inicio: p.dataInicio || null,
      data_fim: p.dataFim || null,
      data_renovacao: p.dataRenovacao || null,
      comissao_percentagem: p.comissaoPercentagem ?? null,
      comissao_valor: p.comissaoValor ?? null,
      estado: p.estado || "ativa",
      vault_id: p.id,
      vault_codigo_cliente: p.codigoCliente || null,
    });
  }

  // --- 4. Insert policies ---
  const { data: insertedPolicies, error: policiesError } = await supabase
    .from("policies")
    .insert(policyRows)
    .select("id, numero_apolice");

  if (policiesError) {
    console.error("Erro ao inserir apólices:", policiesError.message);
    process.exit(1);
  }

  console.log(`✓ ${insertedPolicies.length} apólices inseridas em policies`);
  console.log("\nImportação concluída.");
}

main().catch(err => {
  console.error("Erro:", err.message);
  process.exit(1);
});
