import { createContext, useEffect, useState } from "react";

const newCartCount = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const newCartTotal = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

export const CartContext = createContext({
  setCartVisibility: () => null,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
  displayCart: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [displayCart, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCount(newCartCount(cartItems));
    setCartTotal(newCartTotal(cartItems));
  }, [cartItems]);


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
    setCartItems(newcartItems);
  };

  const removeItemFromCart = (product) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        item.quantity--;
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const deleteItemFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItems);
  };

  const value = {
    displayCart,
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
