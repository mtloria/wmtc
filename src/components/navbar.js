import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { navigate } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setOpen(false);
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

    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      
      setOpen(open);
    };

    return (
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
        <IconButton onClick={() => navigate('/')} style={{ padding: 0 }}>
          <StaticImage src='../images/WMTC_Logo.png' alt='WMTC Logo' style={{ width: '50px', height: '50px' }} placeholder="blurred" />
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
          onClick={toggleDrawer(true)}
          >
          <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right" 
            variant="temporary"
            open={open} 
            onClose={toggleDrawer(false)}
          > 
            <Box>
              <List>
                <ListItem>
                  <ListItemButton onClick={() => navigate('/')}>Home</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={handleAboutClick}>About</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => navigate('/meet-the-team')}>Meet the Team</ListItemButton>
                </ListItem>
              </List>
              <Button key='About' sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleAboutClick}>About</Button>
              <Button key='Meet the Team' sx={{ my: 2, color: 'white', display: 'block' }} onClick={()=>{navigate('/meet-the-team')}}>Meet the Team</Button>
              <Button key='Schedule' sx={{ my: 2, color: 'white', display: 'block' }}>Schedule</Button>
            </Box>
        </Drawer>
        </Box>
        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
export default NavBar;