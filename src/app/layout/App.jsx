import React, { Component, Fragment } from 'react';
import MerchantDashboard from '../../features/merchant/MerchantDashboard/MerchantDashboard';
import BottomNav from '../../features/nav/BottomNav';
import { Route } from 'react-router-dom';
import OrderDashboard from '../../features/order/OrderDashboard/OrderDashboard';
import InboxDashboard from '../../features/inbox/InboxDashboard/InboxDashboard';
import AccountDashboard from '../../features/account/AccountDashboard/AccountDashboard';
import { YoshinoyaDashboard } from '../../features/menu/yoshinoya/YoshinoyaDashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
          <div className='app'>
            <Route exact path='/' component={MerchantDashboard} />
            <Route path='/merchant' component={MerchantDashboard} />
            <Route path='/pesanan' component={OrderDashboard} />
            <Route path='/inbox' component={InboxDashboard} />
            <Route path='/account' component={AccountDashboard} />
            <Route path='/yoshinoya' component={YoshinoyaDashboard} />
            <Route path='/bluelane' component={YoshinoyaDashboard} />
            <Route path='/adora' component={YoshinoyaDashboard} />
            <BottomNav />
          </div>
      </Fragment>
    );
  }
}

export default App;
