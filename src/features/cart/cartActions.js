import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_ITEM
} from './cartConstants';

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};

export const subQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
