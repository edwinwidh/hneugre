import initialState from '../menu/initialState';

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.item.id);
    default:
      return state;
  }
};

export default cartReducer;
