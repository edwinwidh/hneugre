import { combineReducers } from 'redux';
import yoshiReducer from '../../features/menu/yoshinoya/yoshiReducer';
import cartReducer from '../../features/cart/cartReducer';
import blueReducer from '../../features/menu/bluelane/blueReducer';

const rootReducer = combineReducers({
  yoshitems: yoshiReducer,
  cart: cartReducer,
  blueitems: blueReducer
});

export default rootReducer;
