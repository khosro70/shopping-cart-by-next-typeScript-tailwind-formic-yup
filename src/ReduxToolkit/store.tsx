import productFilterReducer from "../ReduxToolkit/features/productFilterSlice";
import shoppingCartReducer from "../ReduxToolkit/features/shoppingCartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      productfilterInNavbar: productFilterReducer,
      shoppingCartStates: shoppingCartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
