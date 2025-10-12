import { Box, Typography, Card, CardContent, Grid, Container, Chip, Avatar } from '@mui/material';
import * as React from 'react';
import foundingMembers from '../images/founding-members.jpeg';
import { StaticImage } from 'gatsby-plugin-image';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import WorkIcon from '@mui/icons-material/Work';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AboutTheTeamPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            About the Team
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Elite athletes who happen to work 9-5 jobs
          </Typography>
        </Box>

        {/* Key Principles */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <WorkIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom>Work First</Typography>
              <Typography variant="body2" color="text.secondary">
                Full-time careers fund our running dreams
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <DirectionsRunIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom>Train Hard</Typography>
              <Typography variant="body2" color="text.secondary">
                6AM workouts before the day job begins
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <GroupIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom>Team Unity</Typography>
              <Typography variant="body2" color="text.secondary">
                Stronger together than apart
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <TrendingUpIcon />
              </Avatar>
              <Typography variant="h6" gutterBottom>Elite Goals</Typography>
              <Typography variant="body2" color="text.secondary">
                Olympic Trials and beyond
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Founding Story Visual */}
        <Card sx={{ mb: 6 }}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Box 
                component="img"
                src={foundingMembers}
                alt="Founding Members"
                sx={{ 
                  width: '100%', 
                  height: { xs: 300, md: 400 }, 
                  objectFit: 'cover' 
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  The Beginning
                </Typography>
                <Typography variant="body1" paragraph>
                  The idea for WMTC began in 2018, after the OneAmerica Indy Mini Marathon. Caleb Kerr and Jordan Kyle, residents of the Indianapolis area, finished within 10 seconds of each other in the top 10. After the race, the two greeted each other and decided it would be beneficial for both of them to train together. As two people with full-time jobs and commitments outside of running, their training schedules are flexed around the work week, often including challenging workouts in the dark, early morning before sunrise.
                </Typography>
                <Typography variant="body1" paragraph>
                  In the years since, Jordan and Caleb have been motivated by the idea of a club – one that unites people like them: working professionals who want to pursue high-level running after college!
                </Typography>
                <Typography variant="body1" paragraph>
                  Our founding four claimed victory in the inaugural <a href="https://www.runningusa.org/industry-news/13000-runners-converge-in-the-big-easy-for-the-2020-humana-rock-n-roll-new-orleans-marathon-and-half/" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none', fontWeight: 'bold' }}>North American Distance Project Teams Competition</a> at Rock n&apos; Roll New Orleans.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="Jordan Kyle" size="small" />
                  <Chip label="Caleb Kerr" size="small" />
                  <Chip label="Jeremy Craven" size="small" />
                  <Chip label="Tom Anderson" size="small" />
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        {/* Timeline/Milestones */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Journey
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>2018</Typography>
                <Typography variant="h6" gutterBottom>The Meeting</Typography>
                <Typography variant="body2">
                  Caleb and Jordan finish within 10 seconds at the OneAmerica Indy Mini Marathon, both in the top 10
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>2020</Typography>
                <Typography variant="h6" gutterBottom>First Victory</Typography>
                <Typography variant="body2">
                  Team wins inaugural North American Distance Project Teams Competition at Rock n&apos; Roll New Orleans
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>2024</Typography>
                <Typography variant="h6" gutterBottom>Olympic Trials</Typography>
                <Typography variant="body2">
                  Multiple athletes qualify for the Olympic Marathon Trials, strong showing at Shamrock Shuffle 8K
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Daily Life Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h5" gutterBottom>
                A Day In the Life
              </Typography>
              <Typography variant="body1" paragraph>
                Work pays the bills that running cannot. That means work comes first, at least in terms of priorities.
              </Typography>
              <Typography variant="body1" paragraph>
                For WMTC athletes, running typically comes chronologically first or last. Most often meeting at 6:00 AM 
                to get training finished before work begins.
              </Typography>
              <Typography variant="body1">
                Some train in late evenings, while others extend the day at both ends by doubling!
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h5" gutterBottom>
                What&apos;s Next
              </Typography>
              <Typography variant="body1" paragraph>
                2024 was another great year for WMTC with strong showings at elite competitions, Olympic Marathon Trials qualifiers, 
                and new members from multiple locations.
              </Typography>
              <Typography variant="body1" paragraph>
                In 2025 we aim to continue gaining attention as an elite training group both in the Midwest and across the country.
              </Typography>
              <Typography variant="body1">
                What&apos;s next? Growth! We hope to see you out there on the roads, track, and trails!
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Video Section */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              The Story of the Working Man
            </Typography>
            <Box sx={{ 
              position: 'relative', 
              paddingBottom: '56.25%', 
              height: 0, 
              overflow: 'hidden',
              maxWidth: '800px',
              mx: 'auto'
            }}>
              <iframe
                src="https://www.youtube.com/embed/xyxp2ax1WhA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="WMTC Video"
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%',
                  border: 'none'
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Logo */}
        <Box sx={{ textAlign: 'center' }}>
          <StaticImage 
            src='../images/WMTC_Logo.png' 
            alt="WMTC Logo" 
            style={{ width: '150px', height: 'auto' }} 
          />
        </Box>

      </Container>
    </ThemeProvider>
  );
};

export default AboutTheTeamPage;