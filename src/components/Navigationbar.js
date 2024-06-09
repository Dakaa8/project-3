import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My React App
        </Typography>
        {/* Hamburger menu icon for smaller screens */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        {/* Navigation links for larger screens */}
        <List sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/products">
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio">
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component={Link} to="/posts">
            <ListItemText primary="Posts" />
          </ListItem>
        </List>
      </Toolbar>
      {/* Drawer for smaller screens */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button component={Link} to="/contact" onClick={handleDrawerClose}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/home" onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/products" onClick={handleDrawerClose}>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio" onClick={handleDrawerClose}>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component={Link} to="/posts" onClick={handleDrawerClose}>
            <ListItemText primary="Posts" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
