/**
 * Markup helpers for the October 2026 HNW pages of the generated markets
 * (scripts/<market>-content/hnw-oct.mjs). Same section/compare-table markup the
 * cluster pages already use (scripts/es-content/niche-shared.mjs), so no new CSS.
 */
export const sec = (band, id, h2, inner) => `
<section class="section ${band}" aria-labelledby="${id}">
  <div class="container narrow article-body">
    <h2 id="${id}">${h2}</h2>
${inner}
  </div>
</section>`;

export const table = (caption, head, rows) => `    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">${caption}</caption>
        <thead>
          <tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
${rows.map((r) => `          <tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('\n')}
        </tbody>
      </table>
    </div>`;

export const ul = (items) => `    <ul>\n${items.map((i) => `      <li>${i}</li>`).join('\n')}\n    </ul>`;
export const p = (...paras) => paras.map((x) => `    <p>${x}</p>`).join('\n');

export const PUBLISHED_OCT = '2026-10-11T09:00:00+00:00';
