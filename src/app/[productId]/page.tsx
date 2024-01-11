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
import SimilarProductPagination from "@/components/modules/SimilarProductPagination";
import {
  DigiMehr,
  Digiclub,
  Digiexpress,
  Digify,
  DigikalaBusiness,
  DigikalaService,
  Digimag,
  Diginext,
  Digipay,
  Digiplus,
  Digistyle,
  Ganjeh,
  Jet,
  Magnet,
  Smartech,
} from "@/helpers/Icons";

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
      <main className="container mx-auto mt-[105px] px-4">
        {/* bread crump */}
        <div className="flex justify-start px-3 py-2 bg-gray-50 rounded mb-2">
          <span className="ml-2">دیجی تایز</span>
          <span className="ml-2">/</span>
          <span className="ml-2">کالای دیجیتال</span>
          <span className="ml-2">/</span>
          <span className="ml-2 opacity-40">
            {type === "watch" ? "ساعت مچی" : null}
            {type === "laptop" ? "لپ تاپ" : null}
            {type === "mobile" ? "موبایل" : null}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          {/* image */}
          <div className="w-full lg:w-2/5 bg-gray-50 p-2 pr-0 h-fit">
            <Image
              className="w-full rounded"
              src={`/images/${image}`}
              alt="product image"
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="flex flex-col w-full md:flex-row lg:w-3/5 gap-2">
            {/* name and others */}
            <div className="bg-gray-50 w-full lg:w-7/12 p-2 rounded mb-4 lg:mb-0">
              <p className="border-b pb-2 text-center font-bold text-lg md:text-sm lg:text-lg">
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
              {/* colors */}
              <div>
                <p>رنگ ها:</p>
                <div className="flex mt-1 lg:mt-2">
                  {[0, 1, 2].map((index) => (
                    <span
                      key={index}
                      onClick={() => handleSpanClick(index)}
                      className={`w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 ml-2 ${
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
              <div className="mt-5">
                <input
                  type="checkbox"
                  className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
                />
                <span className="mr-2">
                  بیمه تجهیزات دیجیتال - بیمه پارسیان
                </span>
              </div>
            </div>
            {/* price and add to shoppingBasket */}
            <div className="bg-gray-50 w-full lg:w-5/12 p-2 rounded text-sm">
              <div className="flex justify-between mb-3 pb-3 border-b">
                <span>فروشنده:</span>
                <span className="text-green-950">دیجی تایز</span>
              </div>
              <span className="flex text-start align-baseline mb-3 pb-3 border-b">
                <IoShieldCheckmarkSharp size={16} color="red" />
                <span className="text-xs mr-2">
                  گارانتی ۱۸ ماهه تراشه افزار تات
                </span>
              </span>
              <div className="flex justify-start align-center mb-3 pb-3 border-b">
                <TbTruckDelivery size={16} color="green" />
                <span className="text-xs mr-2">
                  ارسال امروز (فعلا در شهر تهران و کرج)
                </span>
              </div>
              <div className="flex pb-3 border-b">
                <FaExclamationCircle size={16} color="green" />
                <span className="mr-2 text-green-950">
                  بهترین قیمت در ۳۰ روز گذشته
                </span>
              </div>
              <div className="flex flex-col justify-center items-end ml-5 mt-3">
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
              <button className="mt-3 xl:mt-12 rounded bg-orange-800 p-2 text-slate-50 flex justify-center items-center w-full">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
        {/* similarProducts */}
        <div className="mt-5">
          <span className="mb-3 block w-fit text-lg font-medium border-b-2 pb-2 border-orange-500">
            کالاهای مشابه
          </span>
          <SimilarProductPagination />
        </div>
      </main>
      {/* footer */}
      <footer className="mt-8 flex flex-wrap">
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digiclub />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digiexpress />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digify />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <DigikalaBusiness />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <DigikalaService />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digimag />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <DigiMehr />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Diginext />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digipay />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digiplus />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Digistyle />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Ganjeh />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Jet />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Magnet />
        </span>
        <span className="py-6 px-12 border bg-gray-300 flex-1 cursor-pointer">
          <Smartech />
        </span>
      </footer>
    </div>
  );
};

export default ProductPage;
