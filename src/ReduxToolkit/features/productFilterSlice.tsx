

import { productsData } from "@/helpers/Datas";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsFilter: productsData,
};

export const productsFilterSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {
    fullProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    mobileProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    laptopProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    watchProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    PopularityINFullProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    theMostExpensiveProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    cheapestProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
  },
});

export const {
  fullProducts,
  mobileProducts,
  laptopProducts,
  watchProducts,
  PopularityINFullProducts,
  theMostExpensiveProducts,
  cheapestProducts,
} = productsFilterSlice.actions;

export default productsFilterSlice.reducer;
