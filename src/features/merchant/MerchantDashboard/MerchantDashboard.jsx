import React, { Component, Fragment } from 'react';
import MerchantList from '../MerchantList/MerchantList';
import MerchantNavbar from '../MerchantNavbar';

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
