import React from 'react';
import { Container, Typography } from '@mui/material';

const Main = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to My React App!
      </Typography>
      {/* Add your main content here */}
    </Container>
  );
};

export default Main;
