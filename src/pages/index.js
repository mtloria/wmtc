import * as React from 'react';
import NavBar from '../components/navbar';
import { StaticImage } from 'gatsby-plugin-image';
import AboutTheTeamPage from './about-the-team';
import { useLocation } from '@reach/router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { Typography, Container } from '@mui/material';

const IndexPage = () => {
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  const [opacity, setOpacity] = React.useState(0.8);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const newOpacity = Math.max(0, 0.8 - (scrollTop / maxScroll));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{ height: '200vh', position: 'relative' }}>
        <StaticImage 
          src='../images/brady-track-bw-no-logo.jpg'
          alt='Background Image' 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '70%', 
            objectFit: 'cover', 
            opacity: opacity,
            zIndex: -1 
          }} 
        />
        <NavBar />
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <Typography variant="h1" sx={{ color: 'white', textAlign: 'center', mt: { xs: 4, md: 6 } }} gutterBottom align="center">
            Working Man&apos;s Track Club
          </Typography>
        </Container>
        <div 
          style={{ 
            height: '100vh', 
            padding: '20px', 
            marginTop: '60vh', 
            opacity: 1 - opacity
          }} 
          id="about-section"
        >
          <AboutTheTeamPage />
        </div>
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
