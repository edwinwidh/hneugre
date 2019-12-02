import { combineReducers } from 'redux';
import yoshiReducer from '../../features/menu/yoshinoya/yoshiReducer';
import cartReducer from '../../features/cart/cartReducer';

const rootReducer = combineReducers({
  yoshitems: yoshiReducer,
  cart: cartReducer
});

export default rootReducer;
