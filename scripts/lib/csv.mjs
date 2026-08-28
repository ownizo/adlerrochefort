/**
 * Minimal CSV parser for Search Console exports.
 *
 * Deliberately not a dependency: Search Console's own CSV export (and
 * Excel/Sheets re-saves of it) is well-formed RFC 4180 — double-quoted
 * fields, "" for an escaped quote, comma delimiter — and that is the only
 * shape this needs to read. No dependency was pulled in for one format.
 */

/** Parses one CSV document (already read as a UTF-8 string) into an array of row arrays. */
export function parseCSV(text) {
  // Strip a UTF-8 BOM, which Google Sheets / Excel exports commonly add.
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);

  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;
  const n = text.length;

  const pushField = () => {
    row.push(field);
    field = '';
  };
  const pushRow = () => {
    pushField();
    rows.push(row);
    row = [];
  };

  while (i < n) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += c;
      i++;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (c === ',') {
      pushField();
      i++;
      continue;
    }
    if (c === '\r') {
      i++;
      continue;
    }
    if (c === '\n') {
      pushRow();
      i++;
      continue;
    }
    field += c;
    i++;
  }
  // Final field/row, if the file did not end with a newline.
  if (field !== '' || row.length) pushRow();

  // Drop a trailing fully-empty row (a file ending in a blank line).
  if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') {
    rows.pop();
  }
  return rows;
}

/**
 * Parses a CSV document into an array of objects keyed by its header row.
 * Throws if a required column is missing; silently leaves an optional
 * column undefined on every row if it is absent, rather than failing —
 * Search Console exports vary in which optional dimensions (country,
 * device, date) were included when the export was made.
 */
export function parseCSVObjects(text, { required = [] } = {}) {
  const rows = parseCSV(text);
  if (rows.length === 0) return { header: [], records: [] };

  const header = rows[0].map((h) => h.trim());
  const missing = required.filter((col) => !header.includes(col));
  if (missing.length) {
    throw new Error(`CSV missing required column(s): ${missing.join(', ')} (found: ${header.join(', ')})`);
  }

  const records = rows.slice(1)
    .filter((r) => !(r.length === 1 && r[0] === '')) // skip blank lines mid-file
    .map((r) => {
      const obj = {};
      header.forEach((col, idx) => { obj[col] = r[idx] !== undefined ? r[idx] : undefined; });
      return obj;
    });

  return { header, records };
}
