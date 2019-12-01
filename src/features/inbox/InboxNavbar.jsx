import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class InboxNavbar extends Component {
    render() {
        return (
            <AppBar position='sticky' color='inherit'>
                <Toolbar>
                    <Typography variant='h6' color='error'>
                        Inbox
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default InboxNavbar;
