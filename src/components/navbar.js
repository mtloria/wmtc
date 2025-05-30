import * as React from 'react';
import { AppBar, Box, Toolbar, Container, Button, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navigate } from 'gatsby';
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
    <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" sx={{ minHeight: 64 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <IconButton onClick={() => navigate('/')} style={{ padding: 0, marginRight: 8 }}>
              <StaticImage src='../images/WMTC_Logo.png' alt='WMTC Logo' style={{ width: '48px', height: '48px' }} placeholder="blurred" />
            </IconButton>
            <Button
              key='Home'
              sx={{ color: 'white', fontWeight: 600, fontSize: '1.1rem', letterSpacing: 1, ml: 1, '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1 }}>
            <Button key='About' sx={{ color: 'white', fontWeight: 500, '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }} onClick={handleAboutClick}>About</Button>
            <Button key='Meet the Team' sx={{ color: 'white', fontWeight: 500, '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }} onClick={() => { navigate('/meet-the-team'); }}>Meet the Team</Button>
            <Button key='Results' sx={{ color: 'white', fontWeight: 500, '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }} onClick={() => { navigate('/results'); }}>Results</Button>
            <Button key='Records' sx={{ color: 'white', fontWeight: 500, '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }} onClick={() => { navigate('/records'); }}>Records</Button>
            <Button key='Contact' sx={{ color: 'white', fontWeight: 500, '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }} onClick={() => { navigate('/contact'); }}>Contact</Button>
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
              <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
                    <ListItemButton onClick={() => navigate('/results')}>Results</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton onClick={() => navigate('/records')}>Records</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton onClick={() => navigate('/contact')}>Contact</ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
  
export default NavBar;