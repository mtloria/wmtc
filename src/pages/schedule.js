import * as React from 'react';
import NavBar from '../components/navbar';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const SchedulePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      {/* Content removed as per the suggested changes */}
    </ThemeProvider>
  );
};

export default SchedulePage;
