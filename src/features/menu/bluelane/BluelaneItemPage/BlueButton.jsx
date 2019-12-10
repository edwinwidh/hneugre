import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../cart/cartActions';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const mapState = (state, ownProps) => {
  return {
    blueitems: state.blueitems
  };
};

const actions = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  }; 
};

class BlueButton extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const { blueitem } = this.props;
    return (
      <Button
        component={Link}
        to={`/bluelane`}
        variant='contained'
        color='secondary'
        size='large'
        style={{ backgroundColor: 'red' }}
        onClick={() => {
          this.handleClick(blueitem.id);
        }}
      >
        {`Add: Rp.${blueitem.price}`}
      </Button>
    );
  }
}

export default connect(mapState, actions)(BlueButton);
