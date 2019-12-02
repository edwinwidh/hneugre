import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import CartAppbar from './CartAppbar';
import { removeItem } from './cartActions';

const mapState = (state, props) => {
  return {
    cart: state.cart
  };
};

const actions = dispatch => {
  return {
    removeFromCart: item => dispatch(removeItem(item))
  };
};

class Cart extends Component {
  render() {
    const cartList = this.props.cart.map((item, index) => {
      return (
        <div key={index}>
          <p style={{ color: '#767676' }}>
            {item.name} - {item.price}{' '}
          </p>
        </div>
      );
    });

    return (
      <Container>
        <CartAppbar />
        {cartList}
      </Container>
    );
  }
}

export default connect(mapState, actions)(Cart);
