"use client";

import { setProductBrand } from "@/ReduxToolkit/features/productFilterSlice";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { productBrandItems } from "@/helpers/Datas";
import { ProductBrandIcon, ShevronIconBrand } from "@/helpers/Icons";
import React, { useState } from "react";

const ProductBrands: React.FC = () => {
  const dispatch = useAppDispatch();
  const [productBrandShow, setProductBrandShow] = useState<boolean>(false);
  const toogleProductBrandstate = () => {
    setProductBrandShow((prevState) => !prevState);
  };

  let brands: string[] = [];
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = e.target.value;
    if (e.target.checked) {
      brands = [...brands, newBrand];
    } else {
      brands = brands.filter((item) => item !== newBrand);
    }
    dispatch(setProductBrand(brands));
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
          {productBrandItems.map((item) => (
            <div className="mb-4" key={item.id}>
              <input
                className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
                type="checkbox"
                id={item.id}
                name={item.name}
                value={item.value}
                onChange={handleCheckboxClick}
              />
              <label className="mb-4 mr-2 cursor-pointer" htmlFor={item.id}>
                {item.value}
              </label>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductBrands;
