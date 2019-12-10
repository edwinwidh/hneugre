import React, { Component, Fragment } from 'react';
import MerchantList from '../MerchantList/MerchantList';
import MerchantNavbar from '../MerchantNavbar';
import { Container } from '@material-ui/core';

class MerchantDashboard extends Component {
  render() {
    return (
      <Fragment>
        <MerchantNavbar />
        <MerchantList />
      </Fragment>
    );
  }
}

export default MerchantDashboard;
