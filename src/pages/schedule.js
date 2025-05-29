import * as React from 'react';
import NavBar from '../components/navbar';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const SchedulePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container>
        <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
          Schedule
        </Typography>
        {/* ...existing page content... */}
      </Container>
    </ThemeProvider>
  );
};

export default SchedulePage;
