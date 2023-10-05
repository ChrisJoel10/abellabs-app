import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, Breadcrumbs } from '@mui/material';

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <AppBar position="static">
      <Toolbar>
      {isSmallScreen ? (
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Home</Typography>
            <Typography color="inherit">Page 1</Typography>
            <Typography color="textPrimary">Page 2</Typography>
          </Breadcrumbs>
        ) : (
          <>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Typography variant="subtitle1">Menu Item 1</Typography>
            <Typography variant="subtitle1">Menu Item 2</Typography>
            <Typography variant="subtitle1">Menu Item 3</Typography>
          </>
        )}

      </Toolbar>
    </AppBar>
  );
};

export default Header;
