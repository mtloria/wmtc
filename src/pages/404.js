import * as React from 'react';
import { Link } from 'gatsby';
import { Box, Typography, Container } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Container>
            <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
              Page Not Found
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <StaticImage src='../images/WMTC_Logo.png' alt="WMTC Logo" style={{ width: '100%', maxWidth: 200, margin: '0 auto', objectFit: 'cover', height: 'auto' }} />
            </Box>
            <Typography variant="body1" sx={{ marginTop: 4 }}>
              Sorry, we couldn’t find what you were looking for.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              <Link to="/" style={{ color: '#1e88e5', textDecoration: 'none', fontWeight: 'bold' }}>Go back to the homepage</Link>.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not Found</title>;
