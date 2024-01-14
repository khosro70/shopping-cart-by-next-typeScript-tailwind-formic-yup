import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  allProductsNumber: Number,
  totalProductPrice: [],
};

export const shoppingCartSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      //   state.productType = action.payload;
    },
    setAllProductsNumber: (state, action) => {
      //   state.productBrands = action.payload;
    },
    setTotalProductPrice: (state, action) => {
      //   state.productColors = action.payload;
    },
  },
});

export const { setProducts, setAllProductsNumber, setTotalProductPrice } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
