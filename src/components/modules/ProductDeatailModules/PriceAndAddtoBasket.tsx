import {
  calculateDiscountedPrice,
  englishNumbersToPersian,
} from "@/helpers/functions";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
interface PriceAndAddtoBasketInterpaceProps {
  price: string | undefined;
}
const PriceAndAddtoBasket: React.FC<PriceAndAddtoBasketInterpaceProps> = ({
  price,
}) => {
  return (
    <>
      <div className="bg-gray-50 w-full lg:w-5/12 p-2 rounded text-sm">
        <div className="flex justify-between mb-3 pb-3 border-b">
          <span>فروشنده:</span>
          <span className="text-green-950">دیجی تایز</span>
        </div>
        <span className="flex text-start align-baseline mb-3 pb-3 border-b">
          <IoShieldCheckmarkSharp size={16} color="red" />
          <span className="text-xs mr-2">گارانتی ۱۸ ماهه تراشه افزار تات</span>
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
        <button className="mt-3 xl:mt-12 rounded bg-orange-700 hover:bg-orange-600 p-2 text-slate-50 flex justify-center items-center w-full">
          افزودن به سبد خرید
        </button>
      </div>
    </>
  );
};

export default PriceAndAddtoBasket;
