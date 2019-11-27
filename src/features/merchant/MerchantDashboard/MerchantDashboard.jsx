import React, { Component, Fragment } from 'react';
<<<<<<< HEAD
=======
import MerchantAppBar from '../MerchantNav/MerchantAppBar';
import MerchantBottomNav from '../MerchantNav/MerchantBottomNav';
>>>>>>> 47771aadfd3eafaf49e97ea56abc30b83b4e4702
import MerchantList from '../MerchantList/MerchantList';

class MerchantDashboard extends Component {
  render() {
    return (
      <Fragment>
<<<<<<< HEAD
        <MerchantList />
=======
        <MerchantAppBar />
        <MerchantList />
        <MerchantBottomNav />
>>>>>>> 47771aadfd3eafaf49e97ea56abc30b83b4e4702
      </Fragment>
    );
  }
}

export default MerchantDashboard;
