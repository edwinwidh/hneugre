import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import CartAppbar from './CartAppbar';
import { removeItem } from './cartActions';

const mapState = (state, ownProps) => {
  return {
    cart: state.cart
  };
};

const actions = dispatch => {
  return {
    removeItem: id => {dispatch(removeItem(id))}
  };
};

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id)
    }

  render() {

    let cart = this.props.yoshitems.length ? 
    (
        this.props.yoshitems.map(item=>{
            return(
                <p>{item.name}</p>
            )
        })
    ) : 

    (
        <p>Nothing</p>
    )

    return (
      <Container>
        <CartAppbar />
        {cart}
      </Container>
    );
  }
}

export default connect(mapState, actions)(Cart);
