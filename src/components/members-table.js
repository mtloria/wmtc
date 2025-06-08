import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery, Box, TableSortLabel } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useState } from 'react';

const prColumns = [
  '50 Mile',
  '50K',
  'Marathon',
  'Half Marathon',
  '10K',
  '5K',
  '1500m',
  '800m',
];

const MembersTable = ({ members }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [order, setOrder] = React.useState('asc');
  const [expandedRow, setExpandedRow] = useState(null);

  const handleSort = () => {
    setOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleRowClick = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const sortedMembers = _.orderBy(
    members,
    [member => (member.displayName || '').toLowerCase()],
    [order]
  );

  if (isSmallScreen) {
    return (
      <Box style={{ maxHeight: '70vh', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
        {sortedMembers.map((member) => {
          const allPRs = prColumns
            .map(col => ({ distance: col, time: member[col] }))
            .filter(pr => pr.time && pr.time.trim().toLowerCase() !== 'n/a');
          return (
            <Accordion key={member.id} style={{ margin: '0', border: '1px solid #ddd', borderRadius: '4px' }}>
              <AccordionSummary expandIcon={allPRs.length > 0 ? <KeyboardArrowDownIcon /> : null} style={{ backgroundColor: '#f5f5f5' }}>
                <Typography sx={{ fontWeight: 600 }}>{member.displayName}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: '#fafafa' }}>
                <Typography><strong>Location:</strong> {member.location}</Typography>
                {allPRs.length > 0 && (
                  <Box sx={{ mt: 1 }}>
                    <Typography sx={{ fontWeight: 500, mb: 0.5 }}>PRs:</Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Distance</TableCell>
                          <TableCell>Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {allPRs.map(pr => (
                          <TableRow key={pr.distance}>
                            <TableCell>{pr.distance}</TableCell>
                            <TableCell>{pr.time}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ mb: 2, textAlign: 'center', color: 'text.secondary', fontSize: 16 }}>
        Click a row to view all PRs for that member
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
              <TableCell style={{ fontWeight: 'bold' }}>PR Distance</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>PR Time</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMembers.map((member) => {
              const isExpanded = expandedRow === member.id;
              const allPRs = prColumns
                .map(col => ({ distance: col, time: member[col] }))
                .filter(pr => pr.time && pr.time.trim().toLowerCase() !== 'n/a');
              const hasExpandable = allPRs.length > 0;
              return (
                <React.Fragment key={member.id}>
                  <TableRow
                    hover
                    onClick={hasExpandable ? () => handleRowClick(member.id) : undefined}
                    style={{
                      cursor: hasExpandable ? 'pointer' : 'default',
                      background: isExpanded ? '#e3f2fd' : undefined,
                      transition: 'background 0.2s',
                    }}
                    onMouseDown={hasExpandable ? e => e.currentTarget.style.background = '#bbdefb' : undefined}
                    onMouseUp={hasExpandable ? e => e.currentTarget.style.background = isExpanded ? '#e3f2fd' : '' : undefined}
                    onMouseLeave={hasExpandable ? e => e.currentTarget.style.background = isExpanded ? '#e3f2fd' : '' : undefined}
                  >
                    <TableCell>{member.displayName}</TableCell>
                    <TableCell>{member.location}</TableCell>
                    <TableCell>{member.PRDistance}</TableCell>
                    <TableCell>{member.PRTime}</TableCell>
                    <TableCell width={40} align="center">
                      {hasExpandable ? (isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />) : null}
                    </TableCell>
                  </TableRow>
                  {isExpanded && hasExpandable && (
                    <TableRow>
                      <TableCell colSpan={5} style={{ background: '#fafafa', padding: 0 }}>
                        <Box sx={{ p: 2 }}>
                          <strong>PRs:</strong>
                          <Table size="small" sx={{ mt: 1 }}>
                            <TableHead>
                              <TableRow>
                                <TableCell>Distance</TableCell>
                                <TableCell>Time</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {allPRs.map(pr => (
                                <TableRow key={pr.distance}>
                                  <TableCell>{pr.distance}</TableCell>
                                  <TableCell>{pr.time}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
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
