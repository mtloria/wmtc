import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import members from '../data/members';

const MemberTable = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
      {isSmallScreen ? (
        <Box style={{ maxHeight: '70vh', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
          {members.map((member) => (
            <Accordion key={member.id} style={{ margin: '0', border: '1px solid #ddd', borderRadius: '4px' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: '#f5f5f5' }}>
                <Typography>{member.name}</Typography>
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
                <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Occupation</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Location</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>PR Distance</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>PR Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id} hover>
                  <TableCell>{member.name}</TableCell>
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