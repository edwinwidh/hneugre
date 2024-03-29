import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  TextField,
  IconButton,
  Button
} from '@material-ui/core';
import CartAppbar from './CartAppbar';
import { removeItem, subQuantity, addQuantity } from './cartActions';
import { Link } from 'react-router-dom';
import { Add, Remove } from '@material-ui/icons';

const mapState = (state, props) => {
  return {
    cartList: state.cart
  };
};

const actions = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subQuantity: id => {
      dispatch(subQuantity(id));
    }
  };
};

class Cart extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };

  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  handleSubQuantity = id => {
    this.props.subQuantity(id);
  };

  render() {
    let cart = this.props.cartList.cart.length ? (
      this.props.cartList.cart.map(item => {
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

              <Grid container xs justify='flex-end'>
                <IconButton
                  onClick={() => {
                    this.handleSubQuantity(item.id);
                  }}
                >
                  <Remove />
                </IconButton>
                <IconButton
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                >
                  <Add />
                </IconButton>

              </Grid>
          </Container>
        );
      })
    ) : (
      <Typography>Kosong</Typography>
    );

    return (
      <Fragment>
        <CartAppbar />
        <Box
          display='flex'
          width='100%'
          bgcolor='error.main'
          alignItems='center'
          px={2}
          style={{ height: '40px' }}
        >
          <Grid container xs justify='center'>
            <Typography variant='h5' style={{ color: 'white' }}>
              Blue Lane Coffee Kino Tower
            </Typography>
          </Grid>
        </Box>
        <Grid container xs justify='center' style={{ padding: '10px' }}>
          <Typography variant='h5'>Bungkus</Typography>
        </Grid>
        <Divider variant='middle' />
        {cart}
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

        <Grid container xs>
          <Grid container xs={5}>
            <Typography
              variant='subtitle1'
              style={{ padding: '10px', fontSize: '20px', fontWeight: 'bold' }}
            >
              Promo Code:
            </Typography>
          </Grid>
          <Grid container xs={7}>
            <form noValidate autoComplete='off'>
              <div>
                <TextField
                  id='promocode'
                  variant='outlined'
                  style={{ width: '100%' }}
                />
              </div>
            </form>
          </Grid>
        </Grid>
        <Grid container xs justify='center'>
          <Button
            component={Link}
            to={`/receipt`}
            variant='contained'
            color='secondary'
            size='large'
            style={{bottom: '70px', top: 'auto', position: 'fixed', backgroundColor:'red'}}
          >
            Pesan dan Bayar
          </Button>
        </Grid>
        <br />
        <br />
        <br />
        </Container>
      </Fragment>
    );
  }
}

export default connect(mapState, actions)(Cart);
