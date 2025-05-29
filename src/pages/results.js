import * as React from 'react';
import NavBar from '../components/navbar';
import { CircularProgress, Box, Typography, List, ListItem, ListItemButton, ListItemText, Container } from '@mui/material';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';
import ResultsTable from '../components/results-table';
import { fixUsDateString } from '../utils/fixUsDateString';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const spreadsheetId = '138hvDGLQMJmggHGqWQr_E29276fiE29VS0OQflFsgMk';

const ResultsPage = () => {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedYear, setSelectedYear] = React.useState(null);

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
    // Add Place column, empty string if 'N/A'
    let place = r['Place (optional)'] && r['Place (optional)'].trim() !== 'N/A' ? r['Place (optional)'] : '';
    return {
      name: `${r['First Name'] || ''} ${r['Last Name'] || ''}`.trim(),
      distance: r['Event Distance'] || '',
      result,
      event: r['Event Name'] || '',
      place,
      date: formattedDate
    };
  };

  const tableRows = validResults.map(mapResult);

  // Group by year
  const resultsByYear = tableRows.reduce((acc, row) => {
    const year = row.date ? (new Date(row.date).getFullYear()) : 'Unknown';
    if (!acc[year]) acc[year] = [];
    acc[year].push(row);
    return acc;
  }, {});

  // Sort each year's results by date descending (most recent first)
  Object.keys(resultsByYear).forEach(year => {
    resultsByYear[year].sort((a, b) => {
      // If either date is missing, keep original order
      if (!a.date || !b.date) return 0;
      return new Date(b.date) - new Date(a.date);
    });
  });

  // Sort years descending, current year at the top
  const years = Object.keys(resultsByYear)
    .filter(y => y !== 'Unknown')
    .map(Number)
    .sort((a, b) => b - a);
  if (resultsByYear['Unknown']) years.push('Unknown');

  // Set default selected year to the current year if available
  React.useEffect(() => {
    if (years.length > 0 && !selectedYear) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', width: '100vw' }}>
        <NavBar />
        <Container>
          <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
            Results
          </Typography>
          {/* Main content: sidebar and table, level with each other */}
          <Box sx={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', mt: 4 }}>
            {/* Sidebar */}
            <Box sx={{ minWidth: 200, maxWidth: 220, mr: 4, display: 'flex', alignItems: 'stretch', height: '100%' }}>
              <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                {years.map(year => (
                  <ListItem key={year} disablePadding>
                    <ListItemButton
                      selected={selectedYear === year}
                      onClick={() => setSelectedYear(year)}
                    >
                      <ListItemText primary={year} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* Main table content */}
            <Box sx={{ flexGrow: 1, minWidth: 0, display: 'flex', alignItems: 'flex-start', p: 0 }}>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                  <CircularProgress />
                </Box>
              ) : error ? (
                <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
                  <Typography>{error}</Typography>
                </Box>
              ) : (
                selectedYear && <ResultsTable results={resultsByYear[selectedYear]} />
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ResultsPage;
