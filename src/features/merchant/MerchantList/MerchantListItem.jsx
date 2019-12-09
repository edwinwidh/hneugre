import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

class MerchantListItem extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/bluelane'>
        <Grid container xs justify='center'>
          <img style={{width: '100%'}} alt='iklan' src='/assets/blue.png' />
        </Grid>
        </Link>
        <br />
        <Link to='/yoshinoya'>
        <Grid container xs justify='center'>
          <img style={{width: '100%'}} alt='iklan' src='/assets/yoshi.png' />
        </Grid>
        </Link>
        <br />
        <Link to='/adora'>
        <Grid container xs justify='center'>
          <img style={{width: '100%'}} alt='iklan' src='/assets/adora.png' />
        </Grid>
        </Link>
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

export default MerchantListItem;
