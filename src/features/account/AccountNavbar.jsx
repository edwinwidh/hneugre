import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class AccountNavbar extends Component {
    render() {
        return (
            <AppBar position='sticky' color='inherit'>
                <Toolbar>
                    <Typography variant='h6' color='error'>
                        Account
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default AccountNavbar;
