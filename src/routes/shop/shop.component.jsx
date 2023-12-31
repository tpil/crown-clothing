import "./shop.styles.jsx";
import {ShopContainer} from "./shop.styles.jsx"
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <ShopContainer>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </ShopContainer>
  );
};

export default Shop;
