import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { withRouter } from 'react-router';

class YoshinoyaNavbar extends Component {
    render() {
        return (
            <AppBar position='sticky' color='inherit'>
                <Toolbar>
                    <IconButton edge='start' color='secondary' aria-label='back' onClick={() => {this.props.history.go(-1)}}>
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

export default withRouter(YoshinoyaNavbar);
