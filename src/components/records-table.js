import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, useMediaQuery, Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
const RecordsTable = ({ records }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  // Remove internal sorting; assume records are already sorted as needed
  const sorted = records;

  if (isSmallScreen) {
    return (
      <Box style={{ maxHeight: '60vh', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
        {sorted.map((rec, idx) => (
          <Paper key={idx} sx={{ p: 2, mb: 1, border: '1px solid #ddd', borderRadius: '4px' }}>
            <Typography variant="h6">{rec.distance}</Typography>
            <Typography><strong>Name:</strong> {rec.name}</Typography>
            <Typography><strong>Time:</strong> {rec.time}</Typography>
            <Typography><strong>Event:</strong> {rec.location}</Typography>
            <Typography><strong>Date:</strong> {rec.date}</Typography>
          </Paper>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} style={{ maxHeight: '60vh', margin: '20px', border: '1px solid #ddd' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: '#f5f5f5' }}>
            <TableCell style={{ fontWeight: 'bold' }}>
              Distance
            </TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Event</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.map((rec, idx) => (
            <TableRow key={idx} hover>
              <TableCell>{rec.distance}</TableCell>
              <TableCell>{rec.name}</TableCell>
              <TableCell>{rec.time}</TableCell>
              <TableCell>{rec.location}</TableCell>
              <TableCell>{rec.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecordsTable;
