import * as React from 'react';
import NavBar from '../components/navbar';
import { CircularProgress, Box, Typography } from '@mui/material';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';
import ResultsTable from '../components/results-table';
import { fixUsDateString } from '../utils/fixUsDateString';

const spreadsheetId = '138hvDGLQMJmggHGqWQr_E29276fiE29VS0OQflFsgMk';

const ResultsPage = () => {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // Handle page reload quirks
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.title = 'Results | WMTC';

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGoogleSheetCSV(spreadsheetId, 'Results');
        setResults(data);
      } catch (e) {
        setError('Failed to load results. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  // Filter out rows with empty First Name and Last Name
  const validResults = results.filter(r =>
    (r['First Name'] && r['First Name'].trim() !== '') ||
    (r['Last Name'] && r['Last Name'].trim() !== '')
  );

  // Map to table row format
  const mapResult = r => {
    let formattedDate = r['Race Date'] || '';
    formattedDate = fixUsDateString(formattedDate);
    let result = r['Result (HH:MM:SS.MS)'] || '';
    // Remove leading zeroes from each time component (except for the hour if it's a single digit)
    if (result) {
      const [main, ms] = result.split('.');
      const parts = main.split(':');
      // Remove leading zeroes from minutes and seconds
      const mins = parts[1] ? parts[1].replace(/^0+(?!$)/, '') : '';
      const secs = parts[2] ? parts[2].replace(/^0+(?!$)/, '') : '';
      // If hour is 0 or missing, omit it
      let formatted = '';
      if (parts[0] && Number(parts[0]) > 0) {
        formatted = String(Number(parts[0])) + ':' + mins + ':' + secs;
      } else {
        formatted = mins + ':' + secs;
      }
      result = formatted + (ms ? '.' + ms : '');
    }
    return {
      name: `${r['First Name'] || ''} ${r['Last Name'] || ''}`.trim(),
      distance: r['Event Distance'] || '',
      result,
      event: r['Event Name'] || '',
      date: formattedDate
    };
  };

  const tableRows = validResults.map(mapResult);

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <NavBar />
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Results</h1>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
            <Typography>{error}</Typography>
          </Box>
        ) : (
          <ResultsTable results={tableRows} />
        )}
      </Box>
    </Box>
  );
};

export default ResultsPage;
