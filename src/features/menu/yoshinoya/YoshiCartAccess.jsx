import React from 'react';
import { Typography, ButtonBase, Grid, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const YoshiCartAccess = ({ cartList }) => {
  return (
    <ButtonBase component={Link} to='/cart'>
      <AppBar
        position='fixed'
        style={{
          top: 'auto',
          bottom: 0,
          height: '70px',
          background: '#f44336',
          width: '100%'
        }}
      >
        <Grid container xs>
          <Grid item xs={1}></Grid>
          <Grid container xs={8} alignItems='center'>
            <Typography variant='h6' style={{ color: 'white' }}>
              {`${cartList.cartQuantity} items | Rp. ${cartList.total}`}
            </Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <Typography variant='h6' style={{ color: 'white' }}>
              Lihat Pesanan
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </AppBar>
    </ButtonBase>
  );
};

export default YoshiCartAccess;
