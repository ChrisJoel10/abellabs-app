import React from 'react';
import { AppBar, Container, Divider, IconButton, Link, ListItem, SwipeableDrawer, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/MenuIcon';
import './component.css';

const navigationLinks = [
  { name: 'About Us', href: "section1" },
  { name: 'Our Services', href: 'section2' },
  { name: 'Area of Expertise', href: 'section3' },
  { name: 'Our approach', href: 'section4' },
  { name: 'Contact', href: 'section5' }
];

const Header = () => {

  const menuItemStyle = {
    marginRight: '20px'
  }

  const isSmallScreen = useMediaQuery('(max-width:768px)');

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
                style={menuItemStyle}
              >
                {item.name}
              </Link>
            ))}
          </Container>
        ) :
          (
            <>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer anchor='right' open={true}>
                <IconButton>
                  <ChevronRight />
                </IconButton>
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
                        style={menuItemStyle}
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

const mobileMenu = () => {

}

export default Header;
