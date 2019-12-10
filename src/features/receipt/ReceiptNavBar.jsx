import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class ReceiptNavBar extends Component {
  render() {
    return (
      <AppBar position='sticky' color='inherit'>
        <Toolbar>
          <IconButton
            edge='start'
            color='secondary'
            aria-label='back'
            component={Link}
            to='/pesanan'
          >
            <Close />
          </IconButton>
          <Grid container xs justify='center'>
            <Typography variant='h5' color='inherit'>
              Receipt
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ReceiptNavBar;
