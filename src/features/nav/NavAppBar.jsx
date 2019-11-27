import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class NavAppBar extends Component {
    render() {
        return (
            <AppBar position='sticky' color='inherit'>
                <Toolbar>
                    <Typography variant='h6' color='error'>
                        Restaurants
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavAppBar;
