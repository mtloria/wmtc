import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { StaticImage } from 'gatsby-plugin-image';

const pages = ['Home', 'About', 'Meet the team', 'Schedule/Results/Other'];

const NavBar = () => {
    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters variant="dense">
            <StaticImage src='../../images/WMTC_Logo.png' alt='WMTC Logo' style={{ width: '50px', height: '50px' }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', overflow: 'auto' }}>
                <Button key='About' sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleAboutClick}>About</Button>
                <Button key='About' sx={{ my: 2, color: 'white', display: 'block' }}>Meet the Team</Button>
                <Button key='About' sx={{ my: 2, color: 'white', display: 'block' }}>Schedule</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  
export default NavBar;