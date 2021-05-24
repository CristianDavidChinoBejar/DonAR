import React from 'react'
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography>
                    REGISTRO
                </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>

        </div>
    )
}

export default NavBar
