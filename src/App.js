// App.js
import React from 'react';
import ACCOUNT from './components/auth/Account';
import Navbar from './components/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import List from './components/auth/List';
import Home from './components/Landing/Home';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';
import Cart from './components/Landing/Cart';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar /> {/* Add the Navbar component */}
        <Routes>
          <Route path={ROUTES.ACCOUNT} element={<ACCOUNT />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.LANDING} element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.list} element={<List />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
