import * as React from 'react';
import { Button, Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import eliteStandardsData from '../data/elite-standards';

const EliteStandards = () => {
  const [isMenModalOpen, setIsMenModalOpen] = React.useState(false);
  const [isWomenModalOpen, setIsWomenModalOpen] = React.useState(false);

  const openMenModal = () => setIsMenModalOpen(true);
  const closeMenModal = () => setIsMenModalOpen(false);
  const openWomenModal = () => setIsWomenModalOpen(true);
  const closeWomenModal = () => setIsWomenModalOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = {
    margin: '10px',
    backgroundColor: '#2c387e',
  };

  const tableHeadStyle = {
    backgroundColor: '#f5f5f5',
  };

  const tableCellStyle = {
    fontWeight: 'bold',
  };

  const renderTable = (gender) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={tableHeadStyle}>
            <TableCell sx={tableCellStyle}>Surface</TableCell>
            <TableCell sx={tableCellStyle}>Distance</TableCell>
            <TableCell sx={tableCellStyle}>Standard</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eliteStandardsData.filter(item => item.gender === gender).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.surface}</TableCell>
              <TableCell>{row.distance}</TableCell>
              <TableCell>{row.standard}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div>
      <Button variant="contained" onClick={openMenModal} sx={buttonStyle}>Elite Men&apos;s Standards</Button>
      <Button variant="contained" onClick={openWomenModal} sx={buttonStyle}>Elite Women&apos;s Standards</Button>

      <Modal open={isMenModalOpen} onClose={closeMenModal}>
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={closeMenModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2">Elite Men&apos;s Standards</Typography>
          {renderTable('Men')}
        </Box>
      </Modal>

      <Modal open={isWomenModalOpen} onClose={closeWomenModal}>
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={closeWomenModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2">Elite Women&apos;s Standards</Typography>
          {renderTable('Women')}
        </Box>
      </Modal>
    </div>
  );
};

export default EliteStandards;