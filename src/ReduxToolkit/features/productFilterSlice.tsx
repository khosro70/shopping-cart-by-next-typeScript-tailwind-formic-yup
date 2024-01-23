import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";
import { filterProducts } from "@/helpers/functions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsFilter: productsData,
  productBrands: [],
  productColors: [],
  productType: "",
  navFilterType: "",
};

export const productsFilterSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {
    setProductType: (state, action) => {
      state.productType = action.payload;
      state.productsFilter = filterProducts(
        productsData,
        {
          type: state.productType,
          brand: state.productBrands,
          color: state.productColors,
        },
        state.navFilterType
      );
    },
    setProductBrand: (state, action) => {
      state.productBrands = action.payload;
      state.productsFilter = filterProducts(
        productsData,
        {
          type: state.productType,
          brand: state.productBrands,
          color: state.productColors,
        },
        state.navFilterType
      );
    },
    setProductcolor: (state, action) => {
      state.productColors = action.payload;
      state.productsFilter = filterProducts(
        productsData,
        {
          type: state.productType,
          brand: state.productBrands,
          color: state.productColors,
        },
        state.navFilterType
      );
    },
    setNavFilter: (state, action) => {
      state.navFilterType = action.payload;
      state.productsFilter = filterProducts(
        productsData,
        {
          type: state.productType,
          brand: state.productBrands,
          color: state.productColors,
        },
        state.navFilterType
      );
    },
    setproductFilterStateFromLocalStorage: (state, action) => {
      state = action.payload;
      console.log(action.payload);
    },
  },
});

export const {
  setNavFilter,
  setProductBrand,
  setProductcolor,
  setProductType,
  setproductFilterStateFromLocalStorage
} = productsFilterSlice.actions;

export default productsFilterSlice.reducer;

