import { Box } from '@mui/material';
import * as React from 'react';
import foundingMembers from '../images/founding-members.jpeg';
import { Typography, Card, CardMedia, CardContent, Divider } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const AboutTheTeamPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: { xs: 2, md: 6 }, textAlign: 'center', backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Typography variant="h2" gutterBottom>
          About the Team
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
              component="img"
              alt="Founding Members"
              height="auto"
              image={foundingMembers}
              title="Founding Members"
              sx={{ width: '100%', objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                (Left to Right) Jordan Kyle, Caleb Kerr, Jeremy Craven, and Tom Anderson. These four can be considered the founding members of WMTC, as they were the first group of members to participate in a team race at the 2020 Rock n&apos; Roll Half Marathon in New Orleans. WMTC won the team race in the <a href="https://www.runningusa.org/industry-news/13000-runners-converge-in-the-big-easy-for-the-2020-humana-rock-n-roll-new-orleans-marathon-and-half/" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none', fontWeight: 'bold' }}>Inaugural North American Distance Project Teams Competition!</a>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, flexWrap: 'wrap', gap: 4 }}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                The idea for WMTC began in 2018, after the OneAmerica Indy Mini Marathon. Caleb Kerr and Jordan Kyle, residents of the Indianapolis area, finished within 10 seconds of each other in the top 10. After the race, the two greeted each other and decided it would be beneficial for both of them to train together. As two people with full-time jobs and commitments outside of running, their training schedules are flexed around the work week, often including challenging workouts in the dark, early morning before sunrise.
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p" sx={{ mt: 2 }}>
                In the years since, Jordan and Caleb have been motivated by the idea of a club – one that unites people like them: working professionals who want to pursue high-level running after college!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                A Day In the Life
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Competing at a high level in this sport is not an easy task, especially as an amateur. Work pays the bills that running (as a nonprofessional) cannot. That means work comes first, at least in terms of priorities. This makes a day in the life of a WMTC athlete very similar to tens of millions of others across the country who spend a majority of the hours in a day at their job.
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p" sx={{ mt: 2 }}>
                For a WMTC athlete, running typically either comes chronologically first or last. The athletes most often meet in the early morning (say, 06:00, and rarely any later) to get their training finished before work. It all depends on each athlete&apos;s work schedule and workload. Some may train in the late evenings, while some may extend the day at both ends by doubling!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                What&apos;s Next
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                2024 was another great year for WMTC. We had a strong showing at the Shamrock Shuffle 8K Elite Team Competition on both the men&apos;s and women&apos;s side, sent two athletes to the Olympic Marathon Trials, and added several new members from multiple locations. In 2025 we aim to continue gaining attention as an elite training group both here in the Midwest and across the country.
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p" sx={{ mt: 2 }}>
                With all that said, what&apos;s next for WMTC? Growth! We hope to see you out there on the roads, track, trails, etc.!
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Card sx={{ maxWidth: 1000 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                The Story of the Working Man
              </Typography>
              <Box sx={{ position: 'relative', paddingBottom: '50%', overflow: 'hidden', width: '800px', background: '#000', mt: 2 }}>
                <iframe
                  src="https://www.youtube.com/embed/xyxp2ax1WhA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="WMTC Video"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <StaticImage src='../images/WMTC_Logo.png' alt="WMTC Logo" style={{ width: '100%', maxWidth: 200, margin: '0 auto', objectFit: 'cover', height: 'auto' }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AboutTheTeamPage;