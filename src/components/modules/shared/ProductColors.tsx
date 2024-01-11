"use client";

import { ProductBrandIcon, ProductColorIcon, ShevronIcon } from "@/helpers/Icons";
import React, { useState } from "react";

const ProductBrands: React.FC = () => {
  const [productColorShow, setProductColorShow] = useState<boolean>(false);
  const toogleProductColorstate = () => {
    setProductColorShow((prevState) => !prevState);
  };
  return (
    <div className="text-slate-800 mb-8">
      <div
        onClick={toogleProductColorstate}
        className="flex justify-between items-center cursor-pointer mb-5"
      >
        <div className="flex items-center">
          <ProductColorIcon />
          <span className="mr-2">رنگ محصول</span>
        </div>
        <ShevronIcon productColorShow={productColorShow} />
      </div>
      {productColorShow ? (
        <div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="red"
              name="red"
              value="red"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="red">
              قرمز
            </label>
          </div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="blue"
              name="blue"
              value="blue"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="blue">
              آبی
            </label>
          </div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="yellow"
              name="yellow"
              value="yellow"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="yellow">
              زرد
            </label>
          </div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="green"
              name="green"
              value="green"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="green">
              سبز
            </label>
          </div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="purple"
              name="purple"
              value="purple"
            />
            <label className="mr-2 cursor-pointer" htmlFor="purple">
              بنفش
            </label>
          </div>
          <div className="mb-7">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="orange"
              name="orange"
              value="orange"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="orange">
              صورتی
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductBrands;
