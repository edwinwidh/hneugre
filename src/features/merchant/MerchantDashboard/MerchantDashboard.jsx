import React, { Component, Fragment } from 'react';
import MerchantAppBar from '../MerchantNav/MerchantAppBar';
import MerchantBottomNav from '../MerchantNav/MerchantBottomNav';
import MerchantList from '../MerchantList/MerchantList';

class MerchantDashboard extends Component {
  render() {
    return (
      <Fragment>
        <MerchantAppBar />
        <MerchantList />
        <MerchantBottomNav />
      </Fragment>
    );
  }
}

export default MerchantDashboard;
