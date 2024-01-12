"use client";

import { setNavFilter } from "@/ReduxToolkit/features/productFilterSlice";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { itemsInNavFilter } from "@/helpers/Datas";

import React, { useState } from "react";

const NavFilters: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleItemClick = (text: string, ItemId: number) => {
    setActiveItem(ItemId);
    console.log(text);
    dispatch(setNavFilter(text));
  };

  return (
    <div className="bg-gray-50 h-[40px] mb-4 rounded flex items-center md:px-4 gap-4 md:gap-8 text-[10px] md:text-sm">
      {itemsInNavFilter.map((item) => (
        <div
          key={item.id}
          className={`relative cursor-pointer ${
            item.id === activeItem ? "opacity-100" : "opacity-80"
          }`}
          onClick={(e) => handleItemClick(item.text, item.id)}
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
