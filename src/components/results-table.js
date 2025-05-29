import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ResultsTable = ({ results }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  if (isSmallScreen) {
    return (
      <TableContainer component={Paper} style={{ maxHeight: '60vh', margin: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Result</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Event</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((row, idx) => (
              <TableRow key={idx} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.distance}</TableCell>
                <TableCell>{row.result}</TableCell>
                <TableCell>{row.event}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper} style={{ maxHeight: '60vh', margin: '20px', border: '1px solid #ddd' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: '#f5f5f5' }}>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Result</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Event</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row, idx) => (
            <TableRow key={idx} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.distance}</TableCell>
              <TableCell>{row.result}</TableCell>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
