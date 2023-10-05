import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My React App. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
