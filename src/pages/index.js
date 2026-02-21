import * as React from 'react';
import NavBar from '../components/navbar';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocation } from '@reach/router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { Typography, Container, Box, Card, CardContent, Button, Grid2 } from '@mui/material';
import WhereWeRace from '../components/where-we-race';

const IndexPage = () => {
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Also reset scroll position after a brief delay to handle browser restoration
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const [scrollY, setScrollY] = React.useState(0);
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate various fade effects based on scroll position
  const maxScroll = typeof window !== 'undefined' ? window.innerHeight : 800;
  const heroOpacity = Math.max(0, 0.8 - (scrollY / maxScroll));
  const titleOpacity = Math.max(0, 1 - (scrollY / (maxScroll * 0.6)));
  const contentFadeIn = Math.min(1, Math.max(0, (scrollY - maxScroll * 0.3) / (maxScroll * 0.3)));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{ position: 'relative' }}>
        {/* Hero Section */}
        <Box sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
          <StaticImage 
            src='../images/brady-track-bw-small.jpg'
            alt='Background Image'
            quality={50}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              opacity: heroOpacity,
              zIndex: -1 
            }} 
          />
          <NavBar />
          <Container sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '90vh',
            opacity: titleOpacity,
            transform: `translateY(${scrollY * 0.5}px)` // Parallax effect
          }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: 'white', 
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                fontSize: { xs: '3rem', md: '4rem', lg: '5rem' }
              }} 
              gutterBottom 
              align="center"
            >
              Working Man&apos;s Track Club
            </Typography>
          </Container>
        </Box>

        {/* Content Section */}
        <Box 
          sx={{ 
            minHeight: '100vh',
            backgroundColor: 'background.default',
            opacity: contentFadeIn,
            transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
            transition: 'opacity 0.3s ease-out'
          }}
          id="about-section"
        >
          {/* Quick Stats/Highlights Section */}
          <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
            <Grid2 container spacing={4} sx={{ mb: 6 }}>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" color="primary" gutterBottom>
                    2018
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Conceived
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The idea born from a chance meeting at the Indianapolis Mini Marathon
                  </Typography>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" color="primary" gutterBottom>
                    Elite
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Competition
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Competing at the highest levels while balancing full-time careers
                  </Typography>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" color="primary" gutterBottom>
                    Olympic
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Trials
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Multiple athletes qualified for the 2024 Olympic Marathon Trials
                  </Typography>
                </Card>
              </Grid2>
            </Grid2>

            {/* Mission Statement */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h3" gutterBottom>
                Elite Athletes, Working Professionals
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
                We unite working professionals who pursue high-level running after college. 
                Training before dawn, competing at the elite level, all while maintaining full-time careers.
              </Typography>
              <Button 
                variant={showVideo ? 'outlined' : 'contained'}
                size="large" 
                onClick={() => setShowVideo(false)}
                sx={{ mr: 2 }}
              >
                Our Story
              </Button>
              <Button 
                variant={showVideo ? 'contained' : 'outlined'}
                size="large"
                onClick={() => setShowVideo(true)}
              >
                Our Film
              </Button>
            </Box>

            {/* Founding Story - Visual Section */}
            <Box id="founding-story" sx={{ mb: 8, position: 'relative', overflow: 'hidden' }}>
              {/* Story Content - Entire Grid */}
              <Grid2 
                container 
                spacing={6} 
                alignItems="center"
                sx={{
                  transform: showVideo ? 'translateX(-100%)' : 'translateX(0)',
                  opacity: showVideo ? 0 : 1,
                  transition: 'transform 0.6s ease-in-out, opacity 0.4s ease-in-out',
                  position: showVideo ? 'absolute' : 'relative',
                  width: '100%'
                }}
              >
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Card sx={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <StaticImage 
                      src="../images/founding-members.jpeg"
                      alt="Founding Members"
                      style={{ 
                        width: '100%'
                      }}
                      objectFit="contain"
                      imgStyle={{
                        objectFit: 'contain',
                        objectPosition: 'center top'
                      }}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        (Left to Right) Jordan Kyle, Caleb Kerr, Jeremy Craven, and Tom Anderson. These four can be considered the founding members of WMTC, as they were the first group of members to participate in a team race at the 2020 Rock n&apos; Roll Half Marathon in New Orleans. WMTC won the race in the <a href="https://www.runningusa.org/industry-news/13000-runners-converge-in-the-big-easy-for-the-2020-humana-rock-n-roll-new-orleans-marathon-and-half/" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none', fontWeight: 'bold' }}>Inaugural North American Distance Project Teams Competition!</a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Typography variant="h4" gutterBottom>
                    The Beginning
                  </Typography>
                  <Typography variant="body1" paragraph>
                    The idea for WMTC began in 2018, after the OneAmerica Indy Mini Marathon. Caleb Kerr and Jordan Kyle, residents of the Indianapolis area, finished within 10 seconds of each other in the top 10. After the race, the two greeted each other and decided it would be beneficial for both of them to train together. As two people with full-time jobs and commitments outside of running, their training schedules are flexed around the work week, often including challenging workouts in the dark, early morning before sunrise.
                  </Typography>
                  <Typography variant="body1">
                    In the years since, Jordan and Caleb have been motivated by the idea of a club – one that unites people like them: working professionals who refuse to let careers limit their athletic potential!
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Video Content - Entire Grid */}
              <Grid2 
                container 
                spacing={6} 
                alignItems="center"
                sx={{
                  transform: showVideo ? 'translateX(0)' : 'translateX(100%)',
                  opacity: showVideo ? 1 : 0,
                  transition: 'transform 0.6s ease-in-out, opacity 0.4s ease-in-out',
                  position: showVideo ? 'relative' : 'absolute',
                  top: showVideo ? 0 : '0',
                  width: '100%'
                }}
              >
                <Grid2 size={{ xs: 12 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ maxWidth: 600, width: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h4" gutterBottom align="center">
                          The Story of the Working Man
                        </Typography>
                        <Box sx={{ 
                          position: 'relative', 
                          paddingBottom: '56.25%', 
                          height: 0, 
                          overflow: 'hidden',
                          borderRadius: 1,
                          mb: 2
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
                              border: 'none',
                              borderRadius: '4px'
                            }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" align="center">
                          Watch the journey of elite athletes who refuse to let day jobs limit their running potential. 
                          From early morning track sessions to competitive racing, see what drives the Working Man&apos;s Track Club.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>

            <WhereWeRace />

            {/* Call to Action */}
            <Box sx={{ textAlign: 'center', py: 8, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
              <Box sx={{ mb: 4 }}>
                <StaticImage 
                  src='../images/WMTC_Logo.png' 
                  alt="WMTC Logo" 
                  style={{ width: '120px', height: 'auto' }} 
                />
              </Box>
              <Typography variant="h4" color="primary" gutterBottom>
                Ready to Join the Working Man&apos;s Movement?
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                Whether you&apos;re looking to connect with like-minded athletes or learn more about our training philosophy, 
                we&apos;d love to hear from you.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                onClick={() => window.open('/contact', '_self')}
                sx={{ mr: 2 }}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                onClick={() => window.open('/meet-the-team', '_self')}
              >
                Meet the Team
              </Button>
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => {
  const location = useLocation();
  const pipeWMTC = ' | WMTC';
  let title;

  const path = location.pathname.replace(/^\/wmtc/, '');

  switch (path) {
  case '/':
    title = 'Running' + pipeWMTC;
    break;
  case '/meet-the-team/':
    title = 'Meet the Team' + pipeWMTC;
    break;
  case '/contact/':
    title = 'Contact' + pipeWMTC;
    break;
  case '/records/':
    title = 'Records' + pipeWMTC;
    break;
  case '/results/':
    title = 'Results' + pipeWMTC;
    break;
  default:
    title = 'WMTC';
  }

  React.useEffect(() => {
    document.title = title;
  }, [path, title]);

  return null;
};
