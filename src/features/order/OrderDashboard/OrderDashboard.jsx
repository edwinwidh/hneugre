import React, { Component } from 'react';
import OrderList from '../OrderList/OrderList';
import OrderNavbar from '../OrderNavbar';
import { Container } from '@material-ui/core';

class OrderDashboard extends Component {
  render() {
    return (
      <Container maxWidth='xs'>
        <OrderNavbar />
        <OrderList />
      </Container>
    );
  }
}

export default OrderDashboard;
