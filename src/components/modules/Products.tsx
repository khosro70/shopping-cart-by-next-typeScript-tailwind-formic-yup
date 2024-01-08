"use client";

import React from "react";

import Product from "./Product";
import { useAppSelector } from "@/ReduxToolkit/hooks";
import { productInterface } from "@/helpers/conteracts";

const Products: React.FC = () => {
  const productFilter: productInterface[] = useAppSelector(
    (state) => state.productfilterInNavbar.productsFilter
  );
  return (
    <div className="h-52 rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {productFilter.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Products;
