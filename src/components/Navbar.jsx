import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import * as ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          book4u
        </Typography>
        <div>
          <Button color="inherit" component={Link} to={ROUTES.HOME} sx={{ marginRight: '10px', '@media (min-width: 600px)': { marginRight: '30px' } }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to={ROUTES.CART} sx={{ marginRight: '10px', '@media (min-width: 600px)': { marginRight: '30px' } }}>
            Cart
          </Button>
          <Button color="inherit" component={Link} to={ROUTES.ACCOUNT} sx={{ marginRight: '10px', '@media (min-width: 600px)': { marginRight: '30px' } }}>
            Account
          </Button>
          <Button color="inherit" component={Link} to={ROUTES.SIGN_IN} sx={{ marginRight: '10px', '@media (min-width: 600px)': { marginRight: '30px' } }}>
            Sign In
          </Button>
          <Button color="inherit" component={Link} to={ROUTES.SIGN_UP} sx={{ marginRight: '10px', '@media (min-width: 600px)': { marginRight: '30px' } }}>
            Sign Up
          </Button>
          <Button color="inherit" component={Link} to={ROUTES.list} sx={{ marginRight: '20px', '@media (min-width: 600px)': { marginRight: '30px' } }}>
            Books
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
