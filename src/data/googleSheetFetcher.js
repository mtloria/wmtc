// Generic Google Sheet CSV fetcher and parser

/**
 * Fetches and parses a Google Sheet as CSV.
 * @param {string} spreadsheetId - The Google Spreadsheet ID.
 * @param {string} sheetName - The name of the sheet to fetch.
 * @returns {Promise<Array<Object>>} Parsed array of row objects.
 */
export async function fetchGoogleSheetCSV(spreadsheetId, sheetName) {
  // Using the Google Sheets published CSV format
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const csvText = await response.text();
  return parseCSV(csvText);
}

// Improved CSV parser - handles quoted fields with commas
function parseCSV(csvText) {
  const rows = csvText.split('\n').filter(Boolean);
  if (rows.length === 0) return [];
  const parseRow = (row) => {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        if (inQuotes && row[i + 1] === '"') {
          current += '"';
          i++; // skip next quote
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  };
  const headers = parseRow(rows[0]);
  return rows.slice(1).map((row) => {
    const values = parseRow(row);
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.replace(/^"|"$/g, '')] = (values[i] || '').replace(/^"|"$/g, '');
    });
    return obj;
  });
}
