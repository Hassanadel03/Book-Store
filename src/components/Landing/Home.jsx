import { Box, Container } from '@mui/material';
import * as ROUTES from '../../constants/routes';
import React from 'react';
import im from './BS.jpg';

export default function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"  
      >
        <img
          src={im}
          alt="BS Image"
          style={{ width: '1800px', height: 'auto' }}
        />
      </Box>
    </Container>
  );
}
