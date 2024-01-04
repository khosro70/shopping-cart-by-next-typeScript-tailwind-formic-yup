"use client";

import { ProductBrandIcon, ShevronIconBrand } from "@/helpers/Icons";
import React, { useState } from "react";

const ProductBrands: React.FC = () => {
  const [productBrandShow, setProductBrandShow] = useState<boolean>(false);
  const toogleProductBrandstate = () => {
    setProductBrandShow((prevState) => !prevState);
  };

  return (
    <div className="text-slate-800">
      <div
        onClick={toogleProductBrandstate}
        className="flex justify-between items-center cursor-pointer mb-5"
      >
        <div className="flex items-center">
          <ProductBrandIcon />
          <span className="mr-2">برند محصول</span>
        </div>
        <ShevronIconBrand productBrandShow={productBrandShow} />
      </div>
      {productBrandShow ? (
        <div>
          <div className="mb-4">
            <input
              className="w-4 h-4 rounded appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800"
              type="checkbox"
              id="apple"
              name="apple"
              value="apple"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="apple">
              اپل
            </label>
          </div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="samsung"
              name="samsung"
              value="samsung"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="samsung">
              سامسونگ
            </label>
          </div>
          <div className="mb-4">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="xiaomi"
              name="xiaomi"
              value="xiaomi"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="xiaomi">
              شیائومی
            </label>
          </div>
          <div className="mb-7">
            <input
              className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
              type="checkbox"
              id="huawei"
              name="huawei"
              value="huawei"
            />
            <label className="mb-4 mr-2 cursor-pointer" htmlFor="huawei">
              هواوی
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductBrands;
