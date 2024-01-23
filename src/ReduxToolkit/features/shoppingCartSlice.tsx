import {
  initialStateInterfaceInShopCart,
  productIterfaceInShopCart,
} from "@/helpers/conteracts";
import { calculateTotalPriceAndCounts } from "@/helpers/functions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialStateInterfaceInShopCart = {
  product: undefined,
  products: [],
  allProductsNumber: 0,
  totalProductPrice: 0,
  productCount: 0,
};

export const shoppingCartSlice = createSlice({
  name: "shopCartProducts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productItem: productIterfaceInShopCart | undefined =
        state.products.find((product) => product.id === action.payload.id);
      if (!productItem) {
        const newProduct = { ...action.payload, count: 1 };
        const newProducts = [...state.products, newProduct];
        const { allProductsNumber, totalProductPrice, productCount } =
          calculateTotalPriceAndCounts(newProducts);
        state.products = newProducts;
        state.allProductsNumber = allProductsNumber;
        state.totalProductPrice = totalProductPrice;
        state.productCount = productCount;
      }
    },
    increaseProductCount: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex].count++;
      const { allProductsNumber, totalProductPrice } =
        calculateTotalPriceAndCounts(state.products);
      state.allProductsNumber = allProductsNumber;
      state.totalProductPrice = totalProductPrice;
    },
    decreaseProductCount: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[productIndex].count--;
      const { allProductsNumber, totalProductPrice } =
        calculateTotalPriceAndCounts(state.products);
      state.allProductsNumber = allProductsNumber;
      state.totalProductPrice = totalProductPrice;
    },
    deleteProduct: (state, action) => {
      const productItem: productIterfaceInShopCart | undefined =
        state.products.find((product) => product.id === action.payload.id);
      if (productItem) {
        const filterProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        const { allProductsNumber, totalProductPrice, productCount } =
          calculateTotalPriceAndCounts(filterProducts);
        state.products = filterProducts;
        state.allProductsNumber = allProductsNumber;
        state.totalProductPrice = totalProductPrice;
        state.productCount = productCount;
        console.log(
          filterProducts,
          calculateTotalPriceAndCounts(filterProducts)
        );
      }
    },
    setShoppCartStateFromLocalStorage: (state, action) => {
      const { products, allProductsNumber, totalProductPrice, productCount } =
        action.payload;
      state.products = products;
      state.allProductsNumber = allProductsNumber;
      state.totalProductPrice = totalProductPrice;
      state.productCount = productCount;
    },
  },
});

export const {
  addProduct,
  increaseProductCount,
  decreaseProductCount,
  deleteProduct,
  setShoppCartStateFromLocalStorage,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
