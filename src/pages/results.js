import * as React from 'react';
import NavBar from '../components/navbar';
import {
  CircularProgress,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
} from '@mui/material';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';
import ResultsTable from '../components/results-table';
import { fixUsDateString, formatResultTime } from '../utils/formatters';
import { compareDistances } from '../utils/distanceSorter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const spreadsheetId = '138hvDGLQMJmggHGqWQr_E29276fiE29VS0OQflFsgMk';
const ALL_YEARS = 'All Years';
const UNKNOWN_YEAR = 'Unknown';
const POPULAR_DISTANCE_LIMIT = 8;
const POPULAR_EVENT_LIMIT = 12;

const getDateValue = dateString => {
  if (!dateString) return null;
  const parsed = new Date(dateString).getTime();
  return Number.isNaN(parsed) ? null : parsed;
};

const compareRowsByDateDesc = (a, b) => {
  const aDate = getDateValue(a.date);
  const bDate = getDateValue(b.date);
  if (aDate === null && bDate === null) return 0;
  if (aDate === null) return 1;
  if (bDate === null) return -1;
  return bDate - aDate;
};

const compareDistanceValues = (a, b) => {
  return compareDistances(a, b);
};

const getTopValuesByFrequency = (values, limit, sorter) => {
  const counts = values
    .filter(Boolean)
    .reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

  const topValues = Object.entries(counts)
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    })
    .slice(0, limit)
    .map(([value]) => value);

  return sorter ? [...topValues].sort(sorter) : topValues;
};

const ResultsPage = () => {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedYear, setSelectedYear] = React.useState(null);
  const [mobileExpandedYear, setMobileExpandedYear] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDistance, setSelectedDistance] = React.useState('All');
  const [selectedEvent, setSelectedEvent] = React.useState('All');
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width:600px)').matches : false
  );

  React.useEffect(() => {
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

  React.useEffect(() => {
    const media = window.matchMedia('(max-width:600px)');
    const handleResize = () => setIsMobile(media.matches);
    media.addEventListener('change', handleResize);
    setIsMobile(media.matches);
    return () => media.removeEventListener('change', handleResize);
  }, []);

  const validResults = results.filter(r =>
    (r['First Name'] && r['First Name'].trim() !== '') ||
    (r['Last Name'] && r['Last Name'].trim() !== '')
  );

  const mapResult = r => {
    let formattedDate = r['Race Date'] || '';
    formattedDate = fixUsDateString(formattedDate);
    let result = r['Result (HH:MM:SS.MS)'] || '';
    result = formatResultTime(result);
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

  const sortedTableRows = [...tableRows].sort(compareRowsByDateDesc);

  const distanceOptions = getTopValuesByFrequency(tableRows.map(row => row.distance), POPULAR_DISTANCE_LIMIT, compareDistanceValues);
  const eventOptions = getTopValuesByFrequency(
    tableRows.map(row => row.event),
    POPULAR_EVENT_LIMIT,
    (a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })
  );

  React.useEffect(() => {
    if (selectedDistance !== 'All' && !distanceOptions.includes(selectedDistance)) {
      setSelectedDistance('All');
    }
  }, [selectedDistance, distanceOptions]);

  React.useEffect(() => {
    if (selectedEvent !== 'All' && !eventOptions.includes(selectedEvent)) {
      setSelectedEvent('All');
    }
  }, [selectedEvent, eventOptions]);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredRows = sortedTableRows.filter(row => {
    const matchesSearch =
      !normalizedSearchTerm ||
      row.name.toLowerCase().includes(normalizedSearchTerm) ||
      row.event.toLowerCase().includes(normalizedSearchTerm);
    const matchesDistance = selectedDistance === 'All' || row.distance === selectedDistance;
    const matchesEvent = selectedEvent === 'All' || row.event === selectedEvent;
    return matchesSearch && matchesDistance && matchesEvent;
  });

  const resultsByYear = filteredRows.reduce((acc, row) => {
    const dateValue = getDateValue(row.date);
    const year = dateValue === null ? UNKNOWN_YEAR : new Date(dateValue).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(row);
    return acc;
  }, {});

  const years = Object.keys(resultsByYear)
    .filter(y => y !== UNKNOWN_YEAR)
    .map(Number)
    .sort((a, b) => b - a);
  if (resultsByYear[UNKNOWN_YEAR]) years.push(UNKNOWN_YEAR);

  const yearOptions = [ALL_YEARS, ...years];
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    if (!yearOptions.includes(selectedYear)) {
      setSelectedYear(years.includes(currentYear) ? currentYear : (years[0] ?? ALL_YEARS));
    }
  }, [yearOptions, years, selectedYear, currentYear]);

  React.useEffect(() => {
    if (mobileExpandedYear && !yearOptions.includes(mobileExpandedYear)) {
      setMobileExpandedYear(null);
    }
  }, [mobileExpandedYear, yearOptions]);

  const desktopRows = selectedYear === ALL_YEARS ? filteredRows : (resultsByYear[selectedYear] || []);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDistance('All');
    setSelectedEvent('All');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', width: '100vw' }}>
        <NavBar />
        <Container>
          <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
            Results
          </Typography>
          {!loading && !error && (
            <Box sx={{ maxWidth: '1400px', margin: '0 auto', mt: 2 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
                <TextField
                  label="Search athlete name or event"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  fullWidth
                />
                <FormControl sx={{ minWidth: 180 }}>
                  <InputLabel id="distance-filter-label">Popular Distance</InputLabel>
                  <Select
                    labelId="distance-filter-label"
                    label="Popular Distances"
                    value={selectedDistance}
                    onChange={e => setSelectedDistance(e.target.value)}
                  >
                    <MenuItem value="All">All distances</MenuItem>
                    {distanceOptions.map(distance => (
                      <MenuItem key={distance} value={distance}>{distance}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 220 }}>
                  <InputLabel id="event-filter-label">Popular Event</InputLabel>
                  <Select
                    labelId="event-filter-label"
                    label="Popular Events"
                    value={selectedEvent}
                    onChange={e => setSelectedEvent(e.target.value)}
                  >
                    <MenuItem value="All">All events</MenuItem>
                    {eventOptions.map(event => (
                      <MenuItem key={event} value={event}>{event}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button variant="outlined" onClick={clearFilters} sx={{ alignSelf: { xs: 'stretch', md: 'center' } }}>
                  Clear
                </Button>
              </Stack>
            </Box>
          )}
          <Box sx={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', justifyContent: 'center', mt: 4 }}>
            {!isMobile && (
              <Box sx={{ minWidth: 200, maxWidth: 220, mr: 4, display: 'flex', alignItems: 'stretch', height: '100%' }}>
                <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1, height: '100%' }}>
                  {yearOptions.map(year => (
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
            )}
            <Box sx={{ flexGrow: 1, minWidth: 0, display: 'flex', alignItems: 'flex-start', p: 0, width: '100%' }}>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                  <CircularProgress />
                </Box>
              ) : error ? (
                <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
                  <Typography>{error}</Typography>
                </Box>
              ) : (
                isMobile ? (
                  <Box sx={{ width: '100%' }}>
                    {yearOptions.map(year => (
                      <Accordion key={year} sx={{ mb: 2 }} expanded={mobileExpandedYear === year} onChange={() => setMobileExpandedYear(mobileExpandedYear === year ? null : year)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6">{year}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ResultsTable results={year === ALL_YEARS ? filteredRows : (resultsByYear[year] || [])} />
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                ) : (
                  selectedYear && (
                    desktopRows.length > 0 ? (
                      <ResultsTable results={desktopRows} />
                    ) : (
                      <Box sx={{ p: 3, textAlign: 'center', width: '100%' }}>
                        <Typography>No results match your search and filters.</Typography>
                      </Box>
                    )
                  )
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ResultsPage;
