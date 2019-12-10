import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReceiptNavBar from '../ReceiptNavBar';
import { Box, Typography, Grid } from '@material-ui/core';
import ReceiptInfo from '../ReceiptInfo/ReceiptInfo';

const mapState = state => {
  return {
    cartList: state.cart
  };
};

class ReceiptDashboard extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <Fragment>
        <ReceiptNavBar />
        <Grid container xs justify='center'>
          <Box width='100%' bgcolor='error.main' px={2}>
            <Grid container xs justify='center'>
              <Typography
                variant='h6'
                style={{ color: 'white', padding: '5px' }}
              >
                Kasih liat pada saat pengambilan
              </Typography>
            </Grid>
          </Box>
          <Box width='100%' bgcolor='error.main' px={2}>
            <Grid container xs justify='center'>
              <Typography
                variant='h4'
                style={{ color: 'white', padding: '10px' }}
              >
                Order# : ABCD1234
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <ReceiptInfo cartList={cartList} />
      </Fragment>
    );
  }
}

export default connect(mapState)(ReceiptDashboard);
