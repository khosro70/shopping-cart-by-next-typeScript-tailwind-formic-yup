"use client";

import { setProductcolor } from "@/ReduxToolkit/features/productFilterSlice";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { colorsCheckboxItem } from "@/helpers/Datas";
import { ProductColorIcon, ShevronIcon } from "@/helpers/Icons";
import React, { useState } from "react";

const ProductBrands: React.FC = () => {
  const dispatch = useAppDispatch();
  const [productColorShow, setProductColorShow] = useState<boolean>(false);
  const toogleProductColorstate = () => {
    setProductColorShow((prevState) => !prevState);
  };

  let colors: string[] = [];
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    if (e.target.checked) {
      colors = [...colors, newColor];
    } else {
      colors = colors.filter((item) => item !== newColor);
    }
    dispatch(setProductcolor(colors));
    console.log(colors);
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
          {colorsCheckboxItem.map((item) => (
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
