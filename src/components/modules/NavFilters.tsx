"use client";

import {
  fullProducts,
  PopularityINFullProducts,
  theMostExpensiveProducts,
  cheapestProducts,
} from "@/ReduxToolkit/features/productFilterSlice";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { itemsInNavFilter, productsData } from "@/helpers/Datas";
import {
  comparePricesHighToLow,
  comparePricesLowToHigh,
} from "@/helpers/functions";
import React, { useState } from "react";

const NavFilters: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleDivClick = (ItemId: number) => {
    setActiveItem(ItemId);
    ItemId === 0 ? allData() : null;
    ItemId === 1 ? PopularityProductsAll() : null;
    ItemId === 2 ? mostExpensiveInAllData() : null;
    ItemId === 3 ? cheapestProductsInAllData() : null;
  };

  function allData() {
    // connect to server
    let data = productsData;
    dispatch(fullProducts(data));
  }
  function PopularityProductsAll() {
    // connect to server
    let products = [...productsData];
    let data = products.sort((a, b) => b.Popularity - a.Popularity);
    dispatch(PopularityINFullProducts(data));
  }
  function mostExpensiveInAllData() {
    // connect to server
    let Data = [...productsData];
    Data = Data.sort(comparePricesHighToLow);
    dispatch(theMostExpensiveProducts(Data));
  }
  function cheapestProductsInAllData() {
    // connect to server
    let Data = [...productsData];
    Data = Data.sort(comparePricesLowToHigh);
    dispatch(cheapestProducts(Data));
  }

  return (
    <div className="bg-gray-50 h-[40px] mb-4 rounded flex items-center md:px-4 gap-4 md:gap-8 text-[10px] md:text-sm">
      {itemsInNavFilter.map((item) => (
        <div
          key={item.id}
          className={`relative cursor-pointer ${
            item.id === activeItem ? "opacity-100" : "opacity-60"
          }`}
          onClick={() => handleDivClick(item.id)}
        >
          <span>{item.text}</span>
          {item.id === activeItem && (
            <span className="absolute bg-orange-400 rounded-full w-1 h-1 md:w-2 md:h-2 md:left-[-14px] top-[-3px]"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavFilters;
