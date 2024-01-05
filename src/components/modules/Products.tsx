"use client";

import React, { useState } from "react";

import Product from "./Product";
import { productsData } from "@/helpers/Datas";

const Products: React.FC = () => {
  return (
    <div className="h-52 rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {productsData.map((item) => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Products;
