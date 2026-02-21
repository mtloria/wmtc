import * as React from 'react';
import { Typography, Box, Card, CardContent, Grid2, Chip } from '@mui/material';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';

const WhereWeRace = () => {
  const [topRaces, setTopRaces] = React.useState([]);
  const [racesLoading, setRacesLoading] = React.useState(true);
  const [racesError, setRacesError] = React.useState(null);

  React.useEffect(() => {
    const fetchTopRaces = async () => {
      setRacesLoading(true);
      setRacesError(null);

      try {
        const spreadsheetId = '138hvDGLQMJmggHGqWQr_E29276fiE29VS0OQflFsgMk';
        const data = await fetchGoogleSheetCSV(spreadsheetId, 'Results');

        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 2;
        const raceCounts = {};

        data.forEach((result) => {
          const raceName = result['Event Name']?.toString().trim();
          const raceDate = result['Race Date']?.toString().trim();

          let raceYear = null;
          if (raceDate) {
            const dateObj = new Date(raceDate);
            raceYear = dateObj.getFullYear();
          }

          if (raceName && raceName !== '' && raceName !== 'Event Name' && raceYear && raceYear >= startYear && raceYear <= currentYear) {
            raceCounts[raceName] = (raceCounts[raceName] || 0) + 1;
          }
        });

        const sortedRaces = Object.entries(raceCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([race, count]) => ({ race, count, yearRange: `${startYear}-${currentYear}` }));

        setTopRaces(sortedRaces);
      } catch (error) {
        setRacesError(error.message);
      } finally {
        setRacesLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      fetchTopRaces();
    }
  }, []);

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Where We Race
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        From local favorites to destination races, these are the events where you&apos;ll find WMTC athletes competing.
      </Typography>
      <Grid2 container spacing={3} justifyContent="center">
        {topRaces.map((raceData, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={raceData.race}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2, position: 'relative' }}>
              <CardContent>
                <Typography variant="h4" color="primary" gutterBottom>
                  #{index + 1}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ minHeight: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {raceData.race}
                </Typography>
                <Chip
                  label={`${raceData.count} results (${raceData.yearRange})`}
                  size="small"
                  color="secondary"
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      {racesLoading && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body1" color="text.secondary">
            Loading race data...
          </Typography>
        </Box>
      )}

      {racesError && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body1" color="error">
            Error loading race data: {racesError}
          </Typography>
        </Box>
      )}

      {!racesLoading && !racesError && topRaces.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body1" color="text.secondary">
            No race data available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default WhereWeRace;