import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, IconButton, Drawer, List, ListItem, Divider, Typography, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const menuItems = [
  { text: 'About', sectionId: 'about' },
  { text: 'Services', sectionId: 'service-menu' },
  { text: 'Gallery', sectionId: 'gallery' },
  { text: 'Booking', sectionId: 'booking' },
];


const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} onClick={() => scrollToSection(item.sectionId)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <AppBar position="sticky" sx={{ background: '#C9A678', color: '#333333',  }}>
      <Container sx={{
        maxWidth: {
          lg: 'none',
        }
      }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          
          <Typography variant="h6" component="div">
            Ritual Beauty
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', }, marginRight: '20px' }}>
            <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" onClick={() => scrollToSection('service-menu')}>Services</Button>
            <Button color="inherit" onClick={() => scrollToSection('gallery')}>Gallery</Button>
            <Button color="inherit" onClick={() => scrollToSection('booking')}>Booking</Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Nav;
