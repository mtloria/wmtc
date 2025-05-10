import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery, Box, TableSortLabel, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ from 'lodash';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';

const MemberTable = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [order, setOrder] = React.useState('asc');
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchMembers = async () => {
      try {
        const spreadsheetId = '1kG8qHF1NhJqjj07D30F4vhPDohi3KBDQkQZEX02tdWI';
        const sheetName = 'members'; // Replace with your actual sheet name
        const parsedMembers = await fetchGoogleSheetCSV(spreadsheetId, sheetName);
        // Add extra fields for display consistency
        const membersWithExtras = parsedMembers.map((member, index) => {
          const m = { ...member, id: index + 1 };
          if (m.firstName && m.lastName) {
            m.name = `${m.firstName} ${m.lastName}`;
          }
          if (m.locationCity || m.locationState) {
            const city = m.locationCity || '';
            const state = m.locationState || '';
            m.location = city + (city && state ? ', ' : '') + state;
          } else {
            m.location = '';
          }
          return m;
        });
        setMembers(membersWithExtras);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching members:', error);
        setError('Failed to load member data. Please try again later.');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleSort = () => {
    setOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedMembers = _.orderBy(members, [member => `${member.lastName || ''} ${member.firstName || ''}`.toLowerCase()], [order]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
        <Typography>{error}</Typography>
      </Box>
    );
  }

  return (
    <>
      {isSmallScreen ? (
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
      ) : (
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
      )}
    </>
  );
};

export default MemberTable;