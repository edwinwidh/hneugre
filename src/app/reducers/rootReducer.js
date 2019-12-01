import { combineReducers } from 'redux';
import yoshiReducer from '../../features/menu/yoshinoya/yoshiReducer';

const rootReducer = combineReducers({
  yoshitems: yoshiReducer
});

export default rootReducer;
