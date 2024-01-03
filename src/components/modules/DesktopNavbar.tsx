"use client";

import {
  ProductBrandIcon,
  ShevronIcon,
  ShevronIconBrand,
} from "@/helpers/Icons";
import React, { useState } from "react";
import CategoryInNavbar from "./CategoryInNavbar";

const DesktopNavbar: React.FC = () => {
  const [productBrandShow, setProductBrandShow] = useState<boolean>(false);
  const toogleProductBrandstate = () => {
    setProductBrandShow((prevState) => !prevState);
  };
  const [productColorShow, setProductColorShow] = useState<boolean>(false);
  const toogleProductColorstate = () => {
    setProductColorShow((prevState) => !prevState);
  };
  return (
    <div className="hidden lg:block bg-gray-50 col-span-1 col-start-1 col-end-2 rounded py-5 px-4 overflow-auto desktopFilter h-fit">
      <h3 className="font-bold text-orange-400 mb-5">دسته بندی</h3>
      {/* CategoryInNavbar*/}
      <CategoryInNavbar />
      <h3 className="font-bold mb-5 text-orange-400">فیلتر</h3>
      {/* product brand*/}
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
      {/* product color*/}
      <div className="text-slate-800">
        <div
          onClick={toogleProductColorstate}
          className="flex justify-between items-center cursor-pointer mb-5"
        >
          <div className="flex items-center">
            <ProductBrandIcon />
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
    </div>
  );
};

export default DesktopNavbar;
