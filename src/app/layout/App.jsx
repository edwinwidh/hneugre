import React, { Component, Fragment } from 'react';
import MerchantDashboard from '../../features/merchant/MerchantDashboard/MerchantDashboard';
import BottomNav from '../../features/nav/BottomNav';
import { Route } from 'react-router-dom';
import OrderDashboard from '../../features/order/OrderDashboard/OrderDashboard';
import InboxDashboard from '../../features/inbox/InboxDashboard/InboxDashboard';
import AccountDashboard from '../../features/account/AccountDashboard/AccountDashboard';
import YoshinoyaDashboard from '../../features/menu/yoshinoya/YoshinoyaDashboard';
import YoshinoyaItemPage from '../../features/menu/yoshinoya/YoshinoyaItemPage/YoshinoyaItemPage';
import Cart from '../../features/cart/Cart';
import ReceiptDashboard from '../../features/receipt/ReceiptDashboard/ReceiptDashboard';
import BluelaneDashboard from '../../features/menu/bluelane/BluelaneDashboard';
import BluelaneItemPage from '../../features/menu/bluelane/BluelaneItemPage/BluelaneItemPage';
import BluelaneInfo from '../../features/menu/bluelane/BluelaneInfo';
import InboxMessage from '../../features/inbox/InboxList/InboxMessage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='app'>
          <Route exact path='/' component={MerchantDashboard} />
          <Route path='/merchant' component={MerchantDashboard} />
          <Route path='/pesanan' component={OrderDashboard} />
          <Route exact path='/inbox' component={InboxDashboard} />
          <Route path='/inbox/pesan' component={InboxMessage} />
          <Route path='/account' component={AccountDashboard} />
          <Route exact path='/yoshinoya' component={YoshinoyaDashboard} />
          <Route path='/yoshinoya/:id' component={YoshinoyaItemPage} />
          <Route exact path='/bluelane' component={BluelaneDashboard} />
          <Route exact path='/bluelaneinfo' component={BluelaneInfo} />
          <Route path='/bluelane/:id' component={BluelaneItemPage} />
          <Route path='/cart' component={Cart} />
          <Route path='/receipt' component={ReceiptDashboard} />
          <BottomNav />
        </div>
      </Fragment>
    );
  }
}

export default App;
