import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { navigate } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

const NavBar = () => {
    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            navigate('/');
            setTimeout(() => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 200);
        }
    };

    return (
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
        <IconButton onClick={() => navigate('/')} style={{ padding: 0 }}>
          <StaticImage src='../../images/WMTC_Logo.png' alt='WMTC Logo' style={{ width: '50px', height: '50px' }} placeholder="blurred" />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', overflow: 'auto' }}>
          <Button key='About' sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleAboutClick}>About</Button>
          <Button key='Meet the Team' sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>{navigate('/meet-the-team')}}>Meet the Team</Button>
          <Button key='Schedule' sx={{ my: 2, color: 'white', display: 'block' }}>Schedule</Button>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', overflow: 'auto' }}>
          <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
        </Box>
        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
export default NavBar;