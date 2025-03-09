import * as React from 'react';
import { Link } from 'gatsby';
import { Box, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#202a44' }}>
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
    </Box>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not Found</title>;
