import React, { useState } from 'react';
import { AppBar, Container, Divider, IconButton, Link, List, ListItem, SwipeableDrawer, Toolbar, useMediaQuery } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import './component.css';

const navigationLinks = [
  { name: 'About Us', href: "section1" },
  { name: 'Our Services', href: 'section2' },
  { name: 'Area of Expertise', href: 'section3' },
  { name: 'Our approach', href: 'section4' },
  { name: 'Contact', href: 'section5' }
];


const Header = () => {

  const isSmallScreen = useMediaQuery('(max-width:768px)');
  
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
              <IconButton>
                <MenuIcon onClick={()=> setOpen(true)} />
              </IconButton>
              <SwipeableDrawer anchor='right' open={open} onOpen= {setOpen(true)} onClose={setOpen(false)}>
                <div>
                  <IconButton>
                    <ChevronRightIcon onClick={() => setOpen(false)} />
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {navigationLinks.map((item) => (
                    <ListItem>
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
              </SwipeableDrawer>
            </>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
