import React, { useState } from 'react';
import { AppBar, Container, Divider, IconButton, Link, List, ListItem, Drawer, Toolbar, useMediaQuery } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import './component.css';

const navigationLinks = [
  { name: 'About Us', href: "#about-us" },
  { name: 'Our Services', href: '#our-services' },
  { name: 'Area of Expertise', href: '#area-of-expertise' },
  { name: 'Our approach', href: '#our-approach' },
  { name: 'Contact', href: '#contact' }
];


const Header = () => {

  const isSmallScreen = useMediaQuery('(max-width:860px)');

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="fixed" color='inherit' elevation={0} className='appBarStyle'>
      <Toolbar>
        <Container className='logo'>
          <div>Abel Labs</div>
        </Container>
        {!isSmallScreen ? (
          <Container className='nav-links'>
            {navigationLinks.map((item) => (
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </Container>
        ) :
          (
            <>
              <IconButton onClick={()=> setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                <div>
                  <IconButton onClick={() => setOpen(false)} >
                    <ChevronRightIcon />
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {navigationLinks.map((item) => (
                    <ListItem key={item.name}>
                      <Link
                        color="textPrimary"
                        variant="button"
                        underline="none"
                        href={item.href}
                        key={item.name}
                      >
                        {item.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
