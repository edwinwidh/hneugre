import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import CartAppbar from './CartAppbar';
import { removeItem } from './cartActions';
import { Link } from 'react-router-dom';

const mapState = (state, ownProps) => {
  return {
    cart: state.cart,
  };
};

const actions = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    }
  };
};

class Cart extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };

  render() {
    let cart = this.props.cart.length ? (
      this.props.cart.map(item => {
        return (
          <li key={item.id}>
            <div className='item-img'>
              <img src={item.photo} alt={item.photo} className='' />
            </div>

            <div className='item-desc'>
              <span className='title'>{item.name}</span>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <button
                className='waves-effect waves-light btn pink remove'
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing</p>
    );

    return (
      <Container>
        <CartAppbar />
        {cart}
      </Container>
    );
  }
}

export default connect(mapState, actions)(Cart);
