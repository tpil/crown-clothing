import { createContext, useEffect, useReducer, useState } from "react";
import {createAction} from "../utils/reducer/reducer.utils";

//Reducer
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN: 
    return {...state, isCartOpen: payload};
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};



export const CartContext = createContext({
  setCartVisibility: () => null,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  //const [displayCart, setCartVisibility] = useState(false);

  const [{ cartCount, cartTotal, cartItems, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );


    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (product) => {
    let newcartItems;
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      newcartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newcartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    updateCartItemsReducer(newcartItems);
  };

  const removeItemFromCart = (product) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        item.quantity--;
      }
      return item;
    });
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    updateCartItemsReducer(newCartItems);
  };

  const setCartVisibility = (bool) => {
    // const payload = {
    //   isCartOpen: bool
    // }
    console.log(bool)
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setCartVisibility,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
