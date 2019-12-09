import initialState from '../menu/initialState';
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY
} from './cartConstants';

const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.yoshitems.find(item => item.id === action.id);
    let existedItem = state.cart.find(item => action.id === item.id);
    if (existedItem) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        cartQuantity: state.cartQuantity + 1
      };
    } else {
      addedItem.quantity = 1;

      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        cart: [...state.cart, addedItem],
        total: newTotal,
        cartQuantity: state.cartQuantity + 1
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.cart.find(item => action.id === item.id);
    let newItems = state.cart.filter(item => action.id !== item.id);

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    let newCartQuantity = state.cartQuantity - itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      cart: newItems,
      total: newTotal,
      cartQuantity: newCartQuantity
    };
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.yoshitems.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
      cartQuantity: state.cartQuantity + 1
    };
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.yoshitems.find(item => item.id === action.id);
    if (addedItem.quantity === 1) {
      let newItems = state.cart.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        cart: newItems,
        total: newTotal,
        cartQuantity: state.cartQuantity - 1
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
        cartQuantity: state.cartQuantity - 1
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
