"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

import { ProductInterfaceProps } from "@/helpers/conteracts";
import { englishNumbersToPersian } from "@/helpers/functions";

const ProductItemForSimilarProduct: React.FC<ProductInterfaceProps> = ({ data }) => {
  const [selectedSpan, setSelectedSpan] = useState<number | null>(2);
  const { id, name, price, image, brand } = data;
  const handleSpanClick = (index: number | null): void => {
    setSelectedSpan(index);
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-between p-2 hover:shadow-2xl">
      <Image
        className="mb-2 rounded w-full"
        src={`/images/${image}`}
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <div className="flex justify-between items-center w-full mb-2">
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
      <p className="text-right mb-1 text-sm">{name}</p>
      <p className="text-end text-orange-700 mb-2 text-sm">
        {englishNumbersToPersian(price)} تومان
      </p>
      <hr className="mb-1" />
      <Link
        href={`/${id}`}
        className="flex bottom-1 justify-center p-1 rounded w-full font-bold text-orange-800 text-sm hover:bg-gray-300"
      >
        مشاهده و سفارش
      </Link>
    </div>
  );
};

export default ProductItemForSimilarProduct;