"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

import { ProductInterfaceProps } from "@/helpers/conteracts";

const Product: React.FC<ProductInterfaceProps> = ({ data }) => {
  const [selectedSpan, setSelectedSpan] = useState<number | null>(2);
  const { id, name, price, image, brand } = data;
  const handleSpanClick = (index: number | null): void => {
    setSelectedSpan(index);
  };

  return (
    <div className="bg-gray-50 flex flex-col p-2 hover:shadow-2xl">
      <Image
        className="mb-4 rounded w-full"
        src={`/images/${image}`}
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <div className="flex justify-between items-center w-full mb-3">
        <span className="opacity-60">{brand}</span>
        <div className="flex">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              onClick={() => handleSpanClick(index)}
              className={`w-5 h-5 ${
                selectedSpan === index ? "ring-2 ring-offset-1" : null
              } ${index === 0 ? "bg-red-400" : null} ${
                index === 1 ? "bg-yellow-400" : null
              } ${
                index === 2 ? "bg-blue-400" : null
              } rounded-full overflow-hidden p-[4px] flex justify-center items-center`}
            >
              {selectedSpan === index && <FaCheck className="text-white" />}
            </span>
          ))}
        </div>
      </div>
      <p className="text-right mb-3 text-lg">{name}</p>
      <p className="text-end text-orange-700 mb-3">{price} تومان</p>
      <hr />
      <Link
        href="#"
        className="flex justify-center p-3 rounded w-full font-bold text-orange-800 text-lg hover:bg-gray-300"
      >
        مشاهده و سفارش
      </Link>
    </div>
  );
};

export default Product;
