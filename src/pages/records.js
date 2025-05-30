import * as React from 'react';
import NavBar from '../components/navbar';
import { CircularProgress, Tabs, Tab, Box, Typography, Container } from '@mui/material';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';
import RecordsTable from '../components/records-table';
import { fixUsDateString } from '../utils/fixUsDateString';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const spreadsheetId = '138hvDGLQMJmggHGqWQr_E29276fiE29VS0OQflFsgMk';
const TAB_LABELS = ['Road', 'Track', 'Trail'];

const RecordsPage = () => {
  const [tab, setTab] = React.useState(0);
  const [records, setRecords] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [order, setOrder] = React.useState('asc');
  const [orderBy] = React.useState('distance');

  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.title = 'Records | WMTC';

    const fetchRecords = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGoogleSheetCSV(spreadsheetId, 'Records');
        setRecords(data);
      } catch (e) {
        setError('Failed to load records. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, [tab]);

  const handleSort = () => {
    setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const validRecords = records.filter(r =>
    (r['First Name'] && r['First Name'].trim() !== '') ||
    (r['Last Name'] && r['Last Name'].trim() !== '')
  );

  const menRoadRecords = validRecords.filter(r =>
    r.Gender && r.Gender.trim().toLowerCase().startsWith('m') &&
    r['Men\'s Records Terrain'] && r['Men\'s Records Terrain'].trim().toLowerCase() === 'road'
  );
  const menTrackRecords = validRecords.filter(r =>
    r.Gender && r.Gender.trim().toLowerCase().startsWith('m') &&
    r['Men\'s Records Terrain'] && r['Men\'s Records Terrain'].trim().toLowerCase() === 'track'
  );
  const menTrailRecords = validRecords.filter(r =>
    r.Gender && r.Gender.trim().toLowerCase().startsWith('m') &&
    r['Men\'s Records Terrain'] && r['Men\'s Records Terrain'].trim().toLowerCase() === 'trail'
  );
  const womenRoadRecords = validRecords.filter(r =>
    r.Gender && r.Gender.trim().toLowerCase().startsWith('f') &&
    r['Men\'s Records Terrain'] && r['Men\'s Records Terrain'].trim().toLowerCase() === 'road'
  );
  const womenTrackRecords = validRecords.filter(r =>
    r.Gender && r.Gender.trim().toLowerCase().startsWith('f') &&
    r['Men\'s Records Terrain'] && r['Men\'s Records Terrain'].trim().toLowerCase() === 'track'
  );
  const womenTrailRecords = validRecords.filter(r =>
    r.Gender && r.Gender.trim().toLowerCase().startsWith('f') &&
    r['Men\'s Records Terrain'] && r['Men\'s Records Terrain'].trim().toLowerCase() === 'trail'
  );

  const mapRecord = r => {
    let formattedDate = r['Date'] || '';
    formattedDate = fixUsDateString(formattedDate);
    return {
      distance: r['Distance'] || '',
      name: `${r['First Name'] || ''} ${r['Last Name'] || ''}`.trim(),
      time: r['Time'] || '',
      location: r['Event'] || '',
      date: formattedDate
    };
  };

  const distanceOrder = [
    '800m',
    '1 mile',
    '3K',
    '5K',
    '8K',
    '10K',
    '10 mile',
    'Half Marathon',
    'Marathon',
    '50K',
    '50 mile',
    '100K',
    '100 Mile'
  ];

  const normalizeDistance = d => (d || '').replace(/\s+/g, '').replace(/mile(s)?/gi, 'mile').replace(/k/gi, 'k').replace(/\./g, '').toLowerCase();
  const distanceIndexMap = Object.fromEntries(
    distanceOrder.map((d, i) => [normalizeDistance(d), i])
  );

  const customSort = (a, b) => {
    const idxA = distanceIndexMap[normalizeDistance(a.distance)] ?? Infinity;
    const idxB = distanceIndexMap[normalizeDistance(b.distance)] ?? Infinity;
    return idxA - idxB;
  };

  const showMen = tab === 0
    ? menRoadRecords.map(mapRecord).sort(customSort)
    : tab === 1
      ? menTrackRecords.map(mapRecord).sort(customSort)
      : menTrailRecords.map(mapRecord).sort(customSort);
  const showWomen = tab === 0
    ? womenRoadRecords.map(mapRecord).sort(customSort)
    : tab === 1
      ? womenTrackRecords.map(mapRecord).sort(customSort)
      : womenTrailRecords.map(mapRecord).sort(customSort);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default' }}>
        <NavBar />
        <Container>
          <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
            Records
          </Typography>
          <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} centered sx={{ mb: 2 }}>
              {TAB_LABELS.map((label, i) => <Tab key={label + '-' + i} label={label} />)}
            </Tabs>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
                <Typography>{error}</Typography>
              </Box>
            ) : (
              <>
                <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>Women&apos;s Records</Typography>
                <RecordsTable
                  key={'women-' + tab}
                  records={showWomen}
                  order={order}
                  orderBy={orderBy}
                  onSort={handleSort}
                />
                <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>Men&apos;s Records</Typography>
                <RecordsTable
                  key={'men-' + tab}
                  records={showMen}
                  order={order}
                  orderBy={orderBy}
                  onSort={handleSort}
                />
              </>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RecordsPage;
