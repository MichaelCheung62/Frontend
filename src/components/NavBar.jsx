import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [value, setValue] = useState();

  return (
    <div className="nav">
      <AppBar style={{ background: '#063970' }}>
        <Toolbar>
          <Typography to="/" component={Link}>
            Logo
          </Typography>
          <ShoppingCartIcon></ShoppingCartIcon>
          <Tabs
            style={{ marginLeft: 'auto' }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="primary"
          >
            <Tab label="Watchlist" to="/watchlist" component={Link}></Tab>
            <Tab label="FAQ" to="/FAQ" component={Link}></Tab>
            <Tab label="About" to="/About" component={Link}></Tab>
          </Tabs>
          <Button style={{ marginLeft: 'auto' }} variant="contained">
            Login
          </Button>
          <Button style={{ marginLeft: '10px' }} variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
