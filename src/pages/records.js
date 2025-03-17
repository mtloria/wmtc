import * as React from 'react';
import NavBar from '../components/navbar';
import { Box } from '@mui/material';

const RecordsPage = () => {

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <NavBar />
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Records</h1>
      </Box>
    </Box>
  );
};

export default RecordsPage;
