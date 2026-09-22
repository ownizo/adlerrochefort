/** Official electronic Complaints Book plaque (Ownizo / Adler & Rochefort). */
export const LIVRO_HREF = 'https://www.livroreclamacoes.pt/Inicio/';
export const LIVRO_CSS = '<link rel="stylesheet" href="/css/ar-livro.css">';
export const LIVRO_SCRIPT = '<script defer src="/js/ar-livro.js"></script>';

export function livroLink(label) {
  return `<span class="footer-livro">
      <a href="${LIVRO_HREF}" class="footer-livro-link" target="_blank" rel="noopener noreferrer" aria-haspopup="true" aria-expanded="false">${label}</a>
      <span class="footer-livro-card" role="tooltip">
        <a href="${LIVRO_HREF}" target="_blank" rel="noopener noreferrer">
          <img src="/images/livro-reclamacoes.png" width="960" height="303" alt="Livro de Reclamações eletrónico — Ownizo Unipessoal Lda., NIPC 517169029">
        </a>
      </span>
    </span>`;
}
