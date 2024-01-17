"use client";

import React from "react";

import Product from "../shared/Product";
import { useAppSelector } from "@/ReduxToolkit/hooks";
import { productInterface } from "@/helpers/conteracts";

const Products: React.FC = () => {
  const productFilter: productInterface[] = useAppSelector(
    (state) => state.productfilterInNavbar.productsFilter
  );
  return (
    <div
      className={`rounded grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-[calc(100vh-200px)] ${
        productFilter.length === 0 ? "flex justify-center items-center" : "grid"
      }`}
    >
      {productFilter.length > 0 ? (
        productFilter.map((item) => <Product key={item.id} data={item} />)
      ) : (
        <div>
          <span>محصولی متناسب با فیلترهای شما وجود ندارد</span>
        </div>
      )}
    </div>
  );
};

export default Products;
