"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

import { ProductInterfaceProps } from "@/helpers/conteracts";
import { englishNumbersToPersian } from "@/helpers/functions";
import { useRouter } from 'next/navigation';

const Product: React.FC<ProductInterfaceProps> = ({ data }) => {
  const { id, name, price, image, brand, colors, discountPercentage } = data;
  let indextActive = colors.length - 1;
  const [selectedSpan, setSelectedSpan] = useState<number | null>(indextActive);
  const handleSpanClick = (index: number | null): void => {
    setSelectedSpan(index);
  };
  const router = useRouter();
  const handleLinkClick = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      onClick={handleLinkClick}
      className="relative rounded bg-gray-50 flex flex-col justify-between p-2 hover:shadow-2xl cursor-pointer"
    >
      {discountPercentage ? (
        <span className="absolute top-2 right-2 bg-red-700 text-slate-50 p-1 rounded-full">
          {discountPercentage} %
        </span>
      ) : null}

      <Image
        className="mb-4 rounded w-full"
        src={`/images/${image}`}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <div className="flex justify-between items-center w-full mb-3">
        <span className="opacity-60">{brand}</span>
        <div className="flex">
          {colors.map((item, index) => (
            <span
              key={index}
              onClick={() => handleSpanClick(index)}
              className={`w-5 h-5 ${
                selectedSpan === index ? "ring-2 ring-offset-1" : null
              } ${item === "قرمز" ? "bg-red-400" : null} ${
                item === "زرد" ? "bg-yellow-400" : null
              } ${item === "صورتی" ? "bg-pink-400" : null} ${
                item === "آبی" ? "bg-blue-400" : null
              } ${item === "سبز" ? "bg-green-400" : null} ${
                item === "نارنجی" ? "bg-orange-400" : null
              } rounded-full overflow-hidden p-[4px] flex justify-center items-center`}
            >
              {selectedSpan === index && <FaCheck className="text-white" />}
            </span>
          ))}
        </div>
      </div>
      <p className="text-right mb-3 text-lg">{name}</p>
      <p className="text-end text-orange-700 mb-3">
        {englishNumbersToPersian(price)} تومان
      </p>
      <hr />
      <Link
        href={`/${id}`}
        className="flex bottom-1 justify-center transition p-3 rounded w-full font-bold text-orange-800 text-lg hover:bg-gray-300"
      >
        مشاهده و سفارش
      </Link>
    </div>
  );
};

export default Product;
