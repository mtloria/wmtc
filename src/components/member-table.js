import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import members from '../data/members';

const MemberTable = () => {
  return (
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
  );
};

export default MemberTable;