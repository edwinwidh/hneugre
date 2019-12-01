import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

class YoshinoyaNavbar extends Component {
    render() {
        return (
            <AppBar position='sticky' color='inherit'>
                <Toolbar>
                    <IconButton edge='start' color='secondary' aria-label='back'>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant='h6' color='inherit'>
                        Yoshinoya
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default YoshinoyaNavbar;
