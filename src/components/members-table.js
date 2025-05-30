import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery, Box, TableSortLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    [member => `${member.lastName || ''} ${member.firstName || ''}`.toLowerCase()],
    [order]
  );

  if (isSmallScreen) {
    return (
      <Box style={{ maxHeight: '70vh', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
        {sortedMembers.map((member) => (
          <Accordion key={member.id} style={{ margin: '0', border: '1px solid #ddd', borderRadius: '4px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: '#f5f5f5' }}>
              <Typography>{member.name || `${member.firstName || ''} ${member.lastName || ''}`}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#fafafa' }}>
              <Typography><strong>Occupation:</strong> {member.jobTitle}</Typography>
              <Typography><strong>Location:</strong> {member.location}</Typography>
              <Typography><strong>PR Distance:</strong> {member.PRDistance}</Typography>
              <Typography><strong>PR Time:</strong> {member.PRTime}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} style={{ maxHeight: '70vh', margin: '20px', border: '1px solid #ddd' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: '#f5f5f5' }}>
            <TableCell style={{ fontWeight: 'bold' }}>
              <TableSortLabel active direction={order} onClick={handleSort}>
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Occupation</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Location</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>PR Distance</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>PR Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedMembers.map((member) => (
            <TableRow key={member.id} hover>
              <TableCell>{member.name || `${member.firstName || ''} ${member.lastName || ''}`}</TableCell>
              <TableCell>{member.jobTitle}</TableCell>
              <TableCell>{member.location}</TableCell>
              <TableCell>{member.PRDistance}</TableCell>
              <TableCell>{member.PRTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

MembersTable.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      jobTitle: PropTypes.string,
      location: PropTypes.string,
      PRDistance: PropTypes.string,
      PRTime: PropTypes.string,
      locationCity: PropTypes.string,
      locationState: PropTypes.string,
    })
  ).isRequired,
};

export default MembersTable;
