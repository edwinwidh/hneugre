import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../cart/cartActions';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const mapState = (state, ownProps) => {
  return {
    yoshitems: state.yoshitems
  };
};

const actions = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

class YoshiButton extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const { yoshitem } = this.props;
    return (
        <Button
          component={Link}
          to={`/cart`}
          variant='contained'
          color='secondary'
          size='large'
          onClick={() => {
            this.handleClick(yoshitem.id);
          }}
        >
          {`Add: Rp.${yoshitem.price}`}
        </Button>
    )
  }
}

export default connect(mapState, actions)(YoshiButton);
