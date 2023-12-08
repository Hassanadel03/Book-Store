// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import * as ROUTES from '../constants/routes';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          book4u
        </Typography>
        <Button color="inherit" component={Link} to={ROUTES.HOME} sx={ {marginRight: '30px'}}>
          Home
        </Button>
        <Button color="inherit" component={Link} to={ROUTES.CART} sx={ {marginRight: '30px'}}>
          Cart
        </Button>
        <Button color="inherit" component={Link} to={ROUTES.ACCOUNT} sx={ {marginRight: '30px'}}>
          Accounte
        </Button>
        <Button color="inherit" component={Link} to={ROUTES.SIGN_IN} sx={ {marginRight: '30px'}}>
          Sign In
        </Button>
        <Button color="inherit" component={Link} to={ROUTES.SIGN_UP} sx={ {marginRight: '30px'}}>
          Sign Up
        </Button>
        <Button color="inherit" component={Link} to={ROUTES.list} sx={ {marginRight: '50px'}}>
         Books
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
