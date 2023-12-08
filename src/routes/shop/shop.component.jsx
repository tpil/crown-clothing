import "./shop.styles.jsx";
import {ShopContainer} from "./shop.styles.jsx"
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js";
import { setCategories } from "../../store/categories/category.action.js";

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

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
