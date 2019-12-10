import React, { Component } from 'react';
import { Typography, Container, Divider, Grid } from '@material-ui/core';

class ReceiptInfo extends Component {
  render() {
    const { cartList } = this.props;

    let receipt = cartList.cart.length ? (
      cartList.cart.map(item => {
        return (
          <Container maxWidth='xs'>
            <Grid container xs>
              <Grid item xs={8}>
                <Typography
                  variant='body2'
                  style={{ padding: '10px', fontSize: '20px' }}
                >
                  {`${item.quantity} ${item.name}`}
                </Typography>
              </Grid>

              <Grid container xs={4} justify='flex-end'>
                <Typography
                  variant='body2'
                  style={{ padding: '10px', fontSize: '20px' }}
                >
                  {`Rp. ${item.price * item.quantity}`}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        );
      })
    ) : (
      <Typography>Kosong</Typography>
    );

    return (
      <Container maxWidth='xs'>
        <Typography variant='h5' style={{ padding: '10px' }}>
          Blue Lane Coffee Kino Tower
        </Typography>
        <Typography variant='p' style={{ padding: '10px' }}>
          1 January 2019, 16:35:12 | Bungkus
        </Typography>
        <Divider variant='middle' />
        {receipt}
        <Divider variant='middle' />
        <Container maxWidth='xs'>
        <Grid container xs>
          <Grid item xs={8}>
            <Typography
              variant='subtitle1'
              style={{ padding: '10px', fontSize: '20px', fontWeight: 'bold' }}
            >
              Total:
            </Typography>
          </Grid>

          <Grid container xs={4} justify='flex-end'>
            <Typography
              variant='body1'
              style={{ padding: '10px', fontSize: '20px', fontWeight: 'bold' }}
            >
              {`Rp. ${this.props.cartList.total}`}
            </Typography>
          </Grid>
        </Grid>
        </Container>
      </Container>
    );
  }
}

export default ReceiptInfo;
