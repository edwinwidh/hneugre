import { createReducer } from '../../../app/common/utils/reducerUtils';
import { READ_ITEM } from './yoshiConstants';
import initialState from '../initialState';

const readItem = (state = initialState.yoshitems, payload) => {
  return [...state, payload.item];
};

export default createReducer(initialState.yoshitems, {
  [READ_ITEM]: readItem
});
