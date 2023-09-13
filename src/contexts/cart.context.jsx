import { createContext, useState } from "react";

export const CartContext = createContext({
  setCartVisibility: () => null,
  displayCart: false,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [displayCart, setCartVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

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
    const cartCounter = newcartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(cartCounter);
  };

  const value = { displayCart, setCartVisibility, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
