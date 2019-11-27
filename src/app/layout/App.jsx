import React, { Component, Fragment } from 'react';
import MerchantDashboard from '../../features/merchant/MerchantDashboard/MerchantDashboard';
import BottomNav from '../../features/nav/BottomNav';
import NavAppBar from '../../features/nav/NavAppBar';
import { Route } from 'react-router-dom';
import OrderDashboard from '../../features/order/OrderDashboard/OrderDashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavAppBar />
          <div className='app'>
            <Route path='/merchant' component={MerchantDashboard} />
            <Route path='/pesanan' component={OrderDashboard} />
            <MerchantDashboard />
            <BottomNav />
          </div>
      </Fragment>
    );
  }
}

export default App;
