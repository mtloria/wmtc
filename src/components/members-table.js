import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery, Box, TableSortLabel, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MembersTable = ({ members }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [order, setOrder] = React.useState('asc');

  const handleSort = () => {
    setOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedMembers = _.orderBy(
    members,
    [member => (member.displayName || '').toLowerCase()],
    [order]
  );

  if (isSmallScreen) {
    return (
      <Box style={{ maxHeight: '70vh', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
        {sortedMembers.map((member) => (
          <Accordion key={member.id} style={{ margin: '0', border: '1px solid #ddd', borderRadius: '4px' }}>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />} style={{ backgroundColor: '#f5f5f5' }}>
              <Typography sx={{ fontWeight: 600 }}>{member.displayName}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#fafafa' }}>
              <Typography><strong>Location:</strong> {member.location}</Typography>
              <Box sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: 500, mb: 0.5 }}>5 Most Recent Events:</Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Event</TableCell>
                      <TableCell>Distance</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(member.RecentEvents || []).map((ev, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{ev.event}</TableCell>
                        <TableCell>{ev.distance}</TableCell>
                        <TableCell>{ev.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  }

  const [expandedRow, setExpandedRow] = React.useState(null);
  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <>
      <Box sx={{ mb: 2, textAlign: 'center', color: 'text.secondary', fontSize: 16 }}>
        <strong>Click on a member to see more results</strong>
      </Box>
      <TableContainer component={Paper} style={{ maxHeight: '70vh', margin: '20px', border: '1px solid #ddd' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow style={{ backgroundColor: '#f5f5f5' }}>
              <TableCell style={{ fontWeight: 'bold' }}>
                <TableSortLabel active direction={order} onClick={handleSort}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Location</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Recent Event</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Result</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMembers.map((member) => {
              const isExpanded = expandedRow === member.id;
              return (
                <React.Fragment key={member.id}>
                  <TableRow
                    hover
                    onClick={() => handleRowClick(member.id)}
                    style={{
                      cursor: 'pointer',
                      background: isExpanded ? '#e3f2fd' : undefined,
                      transition: 'background 0.2s',
                    }}
                  >
                    <TableCell>{member.displayName}</TableCell>
                    <TableCell>{member.location}</TableCell>
                    <TableCell>{member.RecentEvent}</TableCell>
                    <TableCell>{member.RecentEventDistance}</TableCell>
                    <TableCell>{member.RecentEventTime}</TableCell>
                    <TableCell width={40} align="center">
                      {isExpanded ? <KeyboardArrowDownIcon /> : null}
                    </TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow>
                      <TableCell colSpan={6} style={{ background: '#fafafa', padding: 0 }}>
                        <Collapse in={isExpanded} timeout={400} unmountOnExit appear>
                          <Box sx={{ p: 2, transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
                            <strong>Recent Results:</strong>
                            <Table size="small" sx={{ mt: 1 }}>
                              <TableHead>
                                <TableRow>
                                  <TableCell style={{ fontWeight: 'bold' }}>Event</TableCell>
                                  <TableCell style={{ fontWeight: 'bold' }}>Distance</TableCell>
                                  <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
                                  <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
                                  <TableCell style={{ fontWeight: 'bold' }}>Place</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {(member.RecentEvents || []).map((ev, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell>{ev.event}</TableCell>
                                    <TableCell>{ev.distance}</TableCell>
                                    <TableCell>{ev.time}</TableCell>
                                    <TableCell>{ev.date}</TableCell>
                                    <TableCell>{ev.place}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

MembersTable.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MembersTable;
