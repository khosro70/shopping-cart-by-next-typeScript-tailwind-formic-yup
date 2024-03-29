"use client";

import { FC } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/ReduxToolkit/store";

interface StoreProviderProps {
  store: ReturnType<typeof makeStore>;
  children: React.ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, store }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
