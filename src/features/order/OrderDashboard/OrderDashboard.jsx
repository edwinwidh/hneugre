import React, { Component, Fragment } from 'react';
import OrderList from '../OrderList/OrderList';
import OrderNavbar from '../OrderNavbar';

class OrderDashboard extends Component {
  render() {
    return (
      <Fragment>
        <OrderNavbar />
        <OrderList />
      </Fragment>
    );
  }
}

export default OrderDashboard;
