import React, { Component } from 'react';
import {
  Container,
  TextField,
  InputAdornment,
  Card,
  CardActionArea,
  CardMedia,
  Typography
} from '@material-ui/core';
import MerchantListItem from './MerchantListItem';
import { Search } from '@material-ui/icons';

class MerchantList extends Component {
  render() {
    return (
      <Container>
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
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='/assets/iklan.png'
              title='iklan'
            />
          </CardActionArea>
        </Card>
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
