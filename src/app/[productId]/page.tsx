"use client";
import Header from "@/components/modules/Header";
import { FaThumbsUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaExclamationCircle } from "react-icons/fa";

import { NextPage } from "next";
import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";
import Image from "next/image";
import { useState } from "react";
import {
  calculateDiscountedPrice,
  englishNumbersToPersian,
} from "@/helpers/functions";

interface ProductPagePropsInterface {
  params: {
    productId: string;
  };
}

const ProductPage: NextPage<ProductPagePropsInterface> = ({ params }) => {
  const [selectedSpan, setSelectedSpan] = useState<number | null>(2);
  const handleSpanClick = (index: number | null): void => {
    setSelectedSpan(index);
  };
  const product: productInterface | undefined = productsData.find(
    (p) => p.id === Number(params.productId)
  );

  let name, price, image, brand, type: string | undefined;
  let saleNumber, Popularity: number;

  if (product) {
    name = product.name;
    price = product.price;
    image = product.image;
    brand = product.brand;
    type = product.type;
    saleNumber = product.saleNumber;
    Popularity = product.Popularity;
  }
  return (
    <div>
      <Header />
      <main className="h-[1200px] container mx-auto mt-[105px] px-4">
        {/* bread crump */}
        <div className="flex justify-start px-3 py-2 bg-gray-50 rounded mb-2">
          <span className="ml-2 opacity-40">دیجی تایز</span>
          <span className="ml-2">/</span>
          <span className="ml-2 opacity-40">کالای دیجیتال</span>
          <span className="ml-2">/</span>
          <span className="ml-2">ساعت مچی</span>
        </div>
        {/* image and price */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-4/6 lg:w-2/5 bg-gray-50 p-2 pr-0 h-fit">
            <Image
              className="w-full rounded"
              src={`/images/${image}`}
              alt="product image"
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="flex flex-col md:w-2/6 lg:flex-row lg:w-3/5 gap-2">
            <div className="bg-gray-50 w-full lg:w-7/12 p-2 rounded">
              <p className="border-b pb-2 text-center font-bold text-lg">
                {name}
              </p>
              <div className="text-xs flex mb-2 mt-3 lg:mb-5 lg:mt-5">
                <span className="ml-2 flex align-baseline">
                  <span>
                    <IoIosStar size={15} color="gold" />
                  </span>
                  <span>
                    4.1 <span className="opacity-40">(امتیاز 13 خریدار)</span>
                  </span>
                </span>
                <span className="ml-2 w-2 h-2 bg-slate-300 inline-block rounded-full"></span>
                <span className="ml-2">29دیدگاه</span>
                <span className="ml-2 w-2 h-2 bg-slate-300 inline-block rounded-full"></span>
                <span className="ml-2">30پرسش</span>
              </div>
              <div className="flex justify-start items-baseline text-xs mt-2 mb-3 lg:mb-4 lg:mt-5">
                <FaThumbsUp className="ml-1" size={12} color="green" />
                <span>
                  ۷۸% (۲۹۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
                </span>
              </div>
              <div>
                <p>رنگ ها:</p>
                <div className="flex mt-1 lg:mt-2">
                  {[0, 1, 2].map((index) => (
                    <span
                      key={index}
                      onClick={() => handleSpanClick(index)}
                      className={`w-3 h-3 lg:w-6 lg:h-6 ml-2 ${
                        selectedSpan === index ? "ring-2 ring-offset-1" : null
                      } ${index === 0 ? "bg-red-400" : null} ${
                        index === 1 ? "bg-yellow-400" : null
                      } ${
                        index === 2 ? "bg-blue-400" : null
                      } rounded-full overflow-hidden p-[4px] flex justify-center items-center`}
                    >
                      {selectedSpan === index && (
                        <FaCheck className="text-white" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 w-full lg:w-5/12 p-2 rounded text-sm">
              <div className="flex justify-between mb-3 pb-2 border-b">
                <span>فروشنده:</span>
                <span className="text-green-950">دیجی تایز</span>
              </div>
              <span className="flex text-start align-baseline mb-3 pb-2 border-b">
                <IoShieldCheckmarkSharp size={16} color="red" />
                <span className="text-xs mr-2">
                  گارانتی ۱۸ ماهه تراشه افزار تات
                </span>
              </span>
              <div className="flex justify-start align-center mb-3 pb-2 border-b">
                <TbTruckDelivery size={16} color="green" />
                <span className="text-xs mr-2">
                  ارسال امروز (فعلا در شهر تهران و کرج)
                </span>
              </div>
              <div className="flex pb-2 border-b">
                <FaExclamationCircle size={16} color="green" />
                <span className="mr-2 text-green-950">
                  بهترین قیمت در ۳۰ روز گذشته
                </span>
              </div>
              <div className="flex flex-col justify-center items-end ml-5 mt-2">
                <div className="flex mb-1">
                  <span className="opacity-60 line-through">
                    {price ? englishNumbersToPersian(price) : ""}
                  </span>
                  <span className="mr-2 w-4 h-4 p-3 rounded-2xl bg-red-800 text-slate-50 flex justify-center items-center">
                    ۶%
                  </span>
                </div>
                <div>
                  <span>{calculateDiscountedPrice(price, "6")} تومان</span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
