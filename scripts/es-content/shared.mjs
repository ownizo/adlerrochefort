/**
 * Constants shared by every page in the Spanish cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure every generated market
 * carries. For /es/ it says the opposite of the Danish/Swedish/Polish one: the
 * service runs in Spanish. Spanish policies are issued in Spanish; Portuguese
 * insurers issue theirs in Portuguese by law, and we explain them in Spanish
 * before signature.
 */
export const LANG_POLICY_ES = {
  heading: 'Trabajamos en español',
  body: [
    'Le atendemos en español de principio a fin: propuestas, explicación de las condiciones, correspondencia y gestión de siniestros, siempre por escrito y en su idioma.',
    'Las pólizas de riesgos situados en España se emiten en español. Las aseguradoras portuguesas emiten las suyas, por regla general, en portugués; antes de la firma le explicamos por escrito, en español, qué dice exactamente cada una: coberturas, sumas aseguradas, franquicias y exclusiones.',
  ],
};

/** /es/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'Inicio', url: '/es/' }];
