import React, { Component } from 'react';
import { connect } from 'react-redux';
import YoshinoyaListItem from './YoshinoyaListItem';
import YoshiCartAccess from './YoshiCartAccess';
import { Grid, Container } from '@material-ui/core';

const mapState = state => {
  return {
    cartList: state.cart
  };
};

class YoshinoyaList extends Component {
  render() {
    const { yoshitems, cartList } = this.props;
    return (
      <Container maxWidth='xs'>
        {yoshitems.map(yoshitem => (
          <YoshinoyaListItem key={yoshitem.id} yoshitem={yoshitem} />
        ))}
        <Grid container xs>
          {this.props.cartList.cart.length &&
          <YoshiCartAccess cartList={cartList} />}
        </Grid>
        <br />
        <br />
      </Container>
    );
  }
}

export default connect(mapState)(YoshinoyaList);
