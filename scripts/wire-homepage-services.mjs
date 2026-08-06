#!/usr/bin/env node
/**
 * Block 2.7 — wires the "Áreas de Especialização" grid on the Portuguese
 * homepage to the new commercial pages and adds the two cards the section was
 * missing (TVDE and Alojamento Local).
 *
 * Cards whose landing page exists get an anchor to it. Cards that have no
 * dedicated page keep the contact-form button they already had — inventing a
 * destination for them would be worse than leaving the working CTA in place —
 * and are listed in the run output so the gap is visible.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGE = join(ROOT, 'public', 'index.html');

/** Service card name -> its commercial page. */
const LANDINGS = {
  'Multirriscos Empresarial': '/seguros/empresarial/',
  'Frotas &amp; Transportes': '/seguros/frota/',
  'Seguros Auto': '/seguro-auto/',
  'Seguro Habitação': '/seguros/habitacao/',
  'Seguro TVDE': '/seguros/tvde/',
  'Alojamento Local': '/seguros/alojamento-local/',
};

const CTA_BUTTON =
  '<button class="service-detail-cta" onclick="openContactForm()">Pedir proposta</button>';

const newCard = ({ name, desc, icon, covers, landing }) => `
      <div class="service-card fade-up">
        <div class="service-num">00</div>
        <div class="service-icon">
          ${icon}
        </div>
        <h3 class="service-name">${name}</h3>
        <p class="service-desc">${desc}</p>
        <div class="service-detail">
          <div class="service-detail-inner">
            <div class="service-detail-title">Principais coberturas</div>
            <ul class="service-detail-list">
${covers.map((c) => `              <li>${c}</li>`).join('\n')}
            </ul>
            <a href="${landing}" class="service-detail-cta">Ver detalhes e pedir cotação</a>
          </div>
        </div>
        <button class="service-link" onclick="toggleService(this)">Saber mais</button>
      </div>
`;

const TVDE_CARD = newCard({
  name: 'Seguro TVDE',
  desc:
    'Cobertura para motoristas e operadores Uber, Bolt e Free Now. A apólice particular não cobre transporte remunerado de passageiros — a utilização TVDE tem de estar declarada.',
  icon:
    '<svg viewBox="0 0 24 24"><path d="M5 17h14l-1.5-6.5a2 2 0 00-2-1.5h-7a2 2 0 00-2 1.5L5 17z"></path><circle cx="7.5" cy="17.5" r="1.5"></circle><circle cx="16.5" cy="17.5" r="1.5"></circle><path d="M9 6h6"></path></svg>',
  covers: [
    'RC automóvel com uso profissional',
    'Acidentes pessoais de passageiros',
    'Acidentes de trabalho de motoristas',
    'Danos próprios',
    'Veículo de substituição',
    'Assistência em viagem 24h',
  ],
  landing: '/seguros/tvde/',
});

const AL_CARD = newCard({
  name: 'Alojamento Local',
  desc:
    'Responsabilidade civil exigida pelo regime de AL, multirriscos da unidade e perda de exploração. O seguro do condomínio não cobre o recheio nem os danos causados por hóspedes.',
  icon:
    '<svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V8l7-5 7 5v13"></path><path d="M10 21v-6h4v6"></path></svg>',
  covers: [
    'RC de exploração',
    'Incêndio e danos por água',
    'Recheio e equipamento',
    'Danos causados por hóspedes',
    'Perda de exploração',
    'RC de piscina',
  ],
  landing: '/seguros/alojamento-local/',
});

let html = await readFile(PAGE, 'utf8');
const before = html;

// --- 1. re-point the detail CTA on cards that now have a page -----------------
const repointed = [];
const untouched = [];
for (const [name, url] of Object.entries(LANDINGS)) {
  const marker = `<h3 class="service-name">${name}</h3>`;
  const at = html.indexOf(marker);
  if (at === -1) continue;
  const btn = html.indexOf(CTA_BUTTON, at);
  const cardEnd = html.indexOf('<button class="service-link"', at);
  if (btn === -1 || btn > cardEnd) continue;
  html =
    html.slice(0, btn) +
    `<a href="${url}" class="service-detail-cta">Ver detalhes e pedir cotação</a>` +
    html.slice(btn + CTA_BUTTON.length);
  repointed.push(`${name} -> ${url}`);
}

// --- 2. insert the two new cards ---------------------------------------------
const insertAfter = (cardName, cardHtml) => {
  const at = html.indexOf(`<h3 class="service-name">${cardName}</h3>`);
  if (at === -1) throw new Error(`anchor card not found: ${cardName}`);
  const link = html.indexOf('<button class="service-link"', at);
  const end = html.indexOf('</div>', html.indexOf('</button>', link)) + '</div>'.length;
  html = html.slice(0, end) + '\n' + cardHtml + html.slice(end);
};

if (!html.includes('<h3 class="service-name">Seguro TVDE</h3>')) {
  insertAfter('Frotas &amp; Transportes', TVDE_CARD);
}
if (!html.includes('<h3 class="service-name">Alojamento Local</h3>')) {
  insertAfter('Seguro Habitação', AL_CARD);
}

// --- 3. renumber and re-stagger the whole grid --------------------------------
const gridStart = html.indexOf('<div class="services-grid">');
const gridEnd = html.indexOf('</section>', gridStart);
let grid = html.slice(gridStart, gridEnd);

let n = 0;
grid = grid.replace(/<div class="service-num">\d+<\/div>/g, () => {
  n++;
  return `<div class="service-num">${String(n).padStart(2, '0')}</div>`;
});
let d = -1;
grid = grid.replace(/<div class="service-card fade-up"(?: style="transition-delay: [^"]*;")?>/g, () => {
  d++;
  return `<div class="service-card fade-up" style="transition-delay: ${(d * 0.08).toFixed(2)}s;">`;
});
html = html.slice(0, gridStart) + grid + html.slice(gridEnd);

if (html === before) throw new Error('no change made');
await writeFile(PAGE, html);

// Cards still pointing at the contact form rather than a page of their own.
for (const m of html.slice(gridStart).matchAll(/<h3 class="service-name">([^<]+)<\/h3>/g)) {
  if (!(m[1] in LANDINGS)) untouched.push(m[1]);
}

console.log('re-pointed:\n  ' + repointed.join('\n  '));
console.log(`cards: ${n} (was 13)`);
console.log('still on the contact form (no dedicated page yet):\n  ' + untouched.join('\n  '));
