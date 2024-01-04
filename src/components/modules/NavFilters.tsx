"use client";

import React, { useState } from "react";

const NavFilters: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleDivClick = (ItemId: number) => {
    setActiveItem(ItemId);
  };

  const items = [
    { id: 0, text: "تمام محصولات" },
    { id: 1, text: "محبوب ترین ها" },
    { id: 2, text: "گران ترین ها" },
    { id: 3, text: "ارزان ترین ها" },
    { id: 4, text: "پرفروش ترین ها" },
  ];
  return (
    <div className="bg-gray-50 h-[40px] mb-4 rounded flex items-center px-4 gap-10 text-sm">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative ${
            item.id === activeItem ? "opacity-100" : "opacity-60"
          }`}
          onClick={() => handleDivClick(item.id)}
        >
          <span>{item.text}</span>
          {item.id === activeItem && (
            <span className="absolute bg-orange-400 rounded-full w-2 h-2 left-[-14px]"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavFilters;
