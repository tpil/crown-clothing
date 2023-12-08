import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

//Memoized selectors
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCounter = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
