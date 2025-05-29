// Utility to fix off-by-one date issue for MM/DD/YYYY strings
export function fixUsDateString(dateString) {
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    const [month, day, year] = dateString.split('/');
    const dateObj = new Date(Date.UTC(year, month - 1, Number(day) + 1));
    if (!isNaN(dateObj)) {
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    }
  }
  return dateString;
}
