import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_ITEM
} from './cartConstants';

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item: item
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    item: item
  };
};

export const addQuantity = item => {
  return {
    type: ADD_QUANTITY,
    item: item
  };
};

export const subQuantity = item => {
  return {
    type: SUB_QUANTITY,
    item: item
  };
};
