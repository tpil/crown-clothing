import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//Memoized selectors to to avoid components re-rendirng from reduce() when we have same value of categories
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categryreducer) => categryreducer.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
