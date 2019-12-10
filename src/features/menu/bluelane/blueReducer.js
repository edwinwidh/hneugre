import { createReducer } from '../../../app/common/utils/reducerUtils';
import { READ_ITEM } from '../yoshinoya/yoshiConstants';
import initialState from '../initialState';

const readItem = (state = initialState.blueitems, payload) => {
  return [...state, payload.item];
};

export default createReducer(initialState.blueitems, {
  [READ_ITEM]: readItem
});
