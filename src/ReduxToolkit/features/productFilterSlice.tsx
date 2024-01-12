import { productsData } from "@/helpers/Datas";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsFilter: productsData,
  productBrands: [],
  productColors: [],
  productType: [],
};

export const productsFilterSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {
    fullProducts: (state, action) => {
      state.productsFilter = action.payload;
    },
    brandFilterProducts: (state, action) => {
      state.productsFilter = productsData;
      const filterData = state.productsFilter.filter((product) => {
        if (action.payload.length === 0) return productsData;
        if (action.payload.includes(product.brand)) return product;
      });
      state.productsFilter = filterData;
    },
    colorFilterProducts: (state, action) => {
      state.productsFilter = productsData;
      // console.log(action.payload);
      const filterData = state.productsFilter.filter((product) => {
        if (action.payload.length === 0) return productsData;
        const productColors = product.colors;
        return action.payload.some((color: string) =>
          productColors.includes(color)
        );
      });
      state.productsFilter = filterData;
      console.log(filterData);
    },
    setProductBrand: (state, action) => {
      state.productBrands = action.payload;
    },
    setProductcolor: (state, action) => {
      state.productColors = action.payload;
    },
    setProductType: (state, action) => {
      state.productType = action.payload;
    },
  },
});

export const {
  fullProducts,
  brandFilterProducts,
  colorFilterProducts,
  setProductBrand,
  setProductcolor,
  setProductType,
} = productsFilterSlice.actions;

export default productsFilterSlice.reducer;
