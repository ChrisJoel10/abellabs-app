import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Container maxWidth='lg' id="contact">
        <h3>Contact</h3>
        <Box>
          <Box className='footer'>
            <Box sx={{ display: 'flex', gap: '12px'}}>
              <BusinessIcon />
              Abel Labs <br />
              166 Geary St STE 1500 <br />
              San Francisco, CA 94108
            </Box>
            <Box>
              <Box sx={{ display: 'flex', gap: '12px'}}>
                <CallIcon />
                <span><a href='tel:+14155000858' className='contact'>415-500-0858</a></span>
              </Box>
              <Box sx={{ display: 'flex', gap: '12px', marginTop: '10px'}}>
                <EmailIcon />
                <span><a href='mailto:hello@abellabs.com' className='contact'>hello@abellabs.com</a></span>
              </Box>
            </Box>
          </Box>
          <div>
          </div>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" marginTop='20px'>
          © {new Date().getFullYear()} Abel Labs. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
