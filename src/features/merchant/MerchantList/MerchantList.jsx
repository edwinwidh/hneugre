import React, { Component } from 'react';
import {
  Container,
  TextField,
  InputAdornment,
  Typography,
  Grid
} from '@material-ui/core';
import MerchantListItem from './MerchantListItem';
import { Search } from '@material-ui/icons';

class MerchantList extends Component {
  render() {
    return (
      <Container maxWidth='xs'>
        <form noValidate autoComplete='off'>
          <TextField
            id='outlined-full-width'
            fullWidth
            placeholder='Search'
            style={{ margin: 8 }}
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              )
            }}
          />
        </form>
        <br />
        <Grid container xs justify='center'>
          <img style={{width: '100%'}} alt='iklan' src='/assets/iklan.png' />
        </Grid>
        <br />
        <Typography variant='h5'>
          Near By
        </Typography>
        <br />
        <MerchantListItem />
      </Container>
    );
  }
}

export default MerchantList;
