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

export function formatResultTime(result) {
  if (!result) return '';
  const [main, ms] = result.split('.');
  const parts = main.split(':');
  const mins = parts[1] ? parts[1] : '';
  const secs = parts[2] ? parts[2] : '';
  let formatted = '';
  if (parts[0] && Number(parts[0]) > 0) {
    formatted = String(Number(parts[0])) + ':' + mins + ':' + secs;
  } else {
    formatted = mins + ':' + secs;
  }
  return formatted + (ms ? '.' + ms : '');
}
