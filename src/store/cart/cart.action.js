import { createAction } from "../../utils/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool);

export const addToCart = (cartItems, productToAdd) => {
  const newCartItems = addItemToCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeFromCart = (cartItems, productToAdd) => {
  const newCartItems = removeItemFromCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deletFromCart = (cartItems, productToAdd) => {
  const newCartItems = deleteItemFromCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

function addItemToCart(cartItems, product) {
  let newcartItems;
  const itemExists = cartItems.find((item) => item.id === product.id);
  if (itemExists) {
    newcartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    newcartItems = [...cartItems, { ...product, quantity: 1 }];
  }
  return newcartItems;
}

function removeItemFromCart(cartItems, product) {
  const newCartItems = cartItems.map((item) => {
    if (item.id === product.id && item.quantity > 1) {
      item.quantity--;
    }
    return item;
  });
  return newCartItems;
}

function deleteItemFromCart(cartItems, product) {
  return cartItems.filter((item) => item.id !== product.id);
}
