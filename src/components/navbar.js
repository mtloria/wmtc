import * as React from 'react';
import { AppBar, Box, Toolbar, Container, Button, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navigate } from "gatsby";
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
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
          <Button key='About' sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} onClick={handleAboutClick}>About</Button>
          <Button key='Meet the Team' sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} onClick={() => { navigate('/meet-the-team') }}>Meet the Team</Button>
          <Box sx={{ my: 2, color: 'white', display: 'block', position: 'relative' }} onMouseEnter={(e) => e.currentTarget.children[1].style.display = 'block'} onMouseLeave={(e) => e.currentTarget.children[1].style.display = 'none'}>
          <Button key='Events' sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>Other</Button>
          <Box sx={{ display: 'none', position: 'absolute', top: '100%', left: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1, minWidth: '150px' }}>
            <Button key='Schedule' sx={{ color: 'white', display: 'block', width: '100%', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} onClick={() => { navigate('/schedule') }}>Schedule</Button>
            <Button key='Results' sx={{ color: 'white', display: 'block', width: '100%', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} onClick={() => { navigate('/results') }}>Results</Button>
            <Button key='Records' sx={{ color: 'white', display: 'block', width: '100%', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} onClick={() => { navigate('/records') }}>Records</Button>
          </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
            <ListItem>
              <ListItemButton onClick={() => navigate('/schedule')}>Schedule</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/results')}>Results</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => navigate('/records')}>Records</ListItemButton>
            </ListItem>
            </List>
          </Box>
          </Drawer>
        </Box>
        </Toolbar>
      </Container>
      </AppBar>
    );
  }
  
export default NavBar;