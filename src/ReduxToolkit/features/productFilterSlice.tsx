import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";
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
  },
});

export const {
  setNavFilter,
  setProductBrand,
  setProductcolor,
  setProductType,
} = productsFilterSlice.actions;

export default productsFilterSlice.reducer;

function filterProducts(
  data: productInterface[],
  filterOptions: {
    type?: string;
    brand?: string[];
    color?: string[];
  },
  navFilterType: string
): productInterface[] {
  const { type, brand, color } = filterOptions;

  const products = data.filter((product) => {
    console.log(product.type);
    const matchType =
      !type || type.includes(product.type) || type === "allProduct";
    const matchBrand =
      !brand || brand.length === 0 || brand.includes(product.brand);
    const matchColor =
      !color ||
      color.length === 0 ||
      color.some((c) => product.colors.includes(c));

    return matchType && matchBrand && matchColor;
  });
  switch (navFilterType) {
    case "محبوب ترین ها":
      return products.sort((a, b) => b.Popularity - a.Popularity);
    case "گران ترین ها":
      return products.sort(
        (a, b) =>
          parseFloat(b.price.replace(/,/g, "")) -
          parseFloat(a.price.replace(/,/g, ""))
      );
    case "ارزان ترین ها":
      return products.sort(
        (a, b) =>
          parseFloat(a.price.replace(/,/g, "")) -
          parseFloat(b.price.replace(/,/g, ""))
      );
    default:
      return products;
  }
}

// function sortProductsByPopularity(
//   products: productInterface[]
// ): productInterface[] {
//   const sortedProducts = [...products].sort(
//     (a, b) => b.Popularity - a.Popularity
//   );

//   return sortedProducts;
// }
