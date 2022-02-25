import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
  return (
    <>

        <AppBar postion="fixed" className={classes.appBar} color='inherit'>
            <ToolBar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={} alt="Commerce.js" height="25px" className={classes.image} />
                    Commerce.js
                </Typography>
            </ToolBar>
        </AppBar>

    </>
  )
}

export default Navbar