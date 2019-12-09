import React, { Component } from 'react';
import MerchantList from '../MerchantList/MerchantList';
import MerchantNavbar from '../MerchantNavbar';
import { Container } from '@material-ui/core';

class MerchantDashboard extends Component {
  render() {
    return (
      <Container maxWidth='xs'>
        <MerchantNavbar />
        <MerchantList />
      </Container>
    );
  }
}

export default MerchantDashboard;
