import React from 'react';
import { Box, Typography } from '@mui/material';

const Cart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set height to 100% of viewport height
      }}
    >
      <Typography variant="h5">
        You have not signed in yet. Please sign in to view your cart.
      </Typography>
    </Box>
  );
};

export default Cart;
