import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import BluelaneListItem from './BluelaneListItem';
import YoshiCartAccess from '../yoshinoya/YoshiCartAccess';

const mapState = state => {
  return {
    cartList: state.cart
  };
};

class BluelaneList extends Component {
  render() {
    const { blueitems, cartList } = this.props;
    return (
      <Container maxWidth='xs'>
        {blueitems.map(blueitem => (
          <BluelaneListItem key={blueitem.id} blueitem={blueitem} />
        ))}
        <Grid container xs>
          {this.props.cartList.cart.length && (
            <YoshiCartAccess cartList={cartList} />
          )}
        </Grid>
        <br />
        <br />
      </Container>
    );
  }
}

export default connect(mapState)(BluelaneList);
