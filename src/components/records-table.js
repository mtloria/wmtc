import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, useMediaQuery, Box, Collapse, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import * as React from 'react';

// eslint-disable-next-line react/prop-types
const RecordsTable = ({ records }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [openRows, setOpenRows] = React.useState({});

  const handleExpandClick = idx => {
    setOpenRows(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (isSmallScreen) {
    return (
      <TableContainer component={Paper} style={{ maxHeight: '60vh', margin: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((rec, idx) => (
              <React.Fragment key={rec.distance + '-' + rec.time + '-' + rec.name + '-' + rec.date + '-' + idx}>
                <TableRow hover>
                  <TableCell>{rec.distance}</TableCell>
                  <TableCell>{rec.time}</TableCell>
                  <TableCell>{rec.name}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleExpandClick(idx)}
                    >
                      {openRows[idx] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={openRows[idx]} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Typography variant="body2"><strong>Event:</strong> {rec.location}</Typography>
                        <Typography variant="body2"><strong>Date:</strong> {rec.date}</Typography>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
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
            <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Event</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((rec, idx) => (
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
