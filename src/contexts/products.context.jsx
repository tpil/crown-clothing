import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../assets/shop-data/shop-data.json";

export const ProductsContext = createContext({
  setProducts: () => null,
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);
  

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
