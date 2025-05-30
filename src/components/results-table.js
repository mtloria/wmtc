import * as React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery, Collapse, Box } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ResultsTable = ({ results }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [openRows, setOpenRows] = React.useState({});

  const handleExpandClick = idx => {
    setOpenRows(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (isSmallScreen) {
    // Overlay message state
    const [showOverlay, setShowOverlay] = React.useState(true);
    React.useEffect(() => {
      if (!showOverlay) return;
      const timer = setTimeout(() => setShowOverlay(false), 2500);
      return () => clearTimeout(timer);
    }, [showOverlay]);

    return (
      <Box sx={{ position: 'relative' }}>
        {showOverlay && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(255,255,255,0.92)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', boxShadow: 2, textAlign: 'center' }}>
              <span style={{ fontWeight: 600, fontSize: 18 }}>Tap any row to see more details</span>
            </Box>
          </Box>
        )}
        <TableContainer component={Paper} style={{ maxHeight: '70vh', margin: 0, border: '1px solid #ccc', borderRadius: '8px' }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Result</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row, idx) => (
                <React.Fragment key={idx}>
                  <TableRow
                    hover
                    onClick={() => handleExpandClick(idx)}
                    sx={{
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      backgroundColor: openRows[idx] ? 'action.selected' : undefined,
                      '&:hover': {
                        backgroundColor: openRows[idx] ? 'action.selected' : 'action.hover',
                      },
                      userSelect: 'none',
                    }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.distance}</TableCell>
                    <TableCell>{row.result}</TableCell>
                    <TableCell />
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                      <Collapse in={openRows[idx]} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                          <div><strong>Event:</strong> {row.event}</div>
                          {row.place && <div><strong>Place:</strong> {row.place}</div>}
                          <div><strong>Date:</strong> {row.date}</div>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} style={{ maxHeight: '70vh', margin: 0, border: '1px solid #ddd' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: '#f5f5f5' }}>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Result</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Event</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Place</TableCell>
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
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
ResultsTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      event: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
};

export default ResultsTable;
