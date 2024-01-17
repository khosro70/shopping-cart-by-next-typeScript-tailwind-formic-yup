"use client";

import Image from "next/image";

import {
  ProductInterfaceProps,
  ProductInterfacePropsInShoppingCard,
} from "@/helpers/conteracts";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import {
  calculateTotalPriceOfOneProduct,
  englishNumbersToPersian,
} from "@/helpers/functions";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import {
  decreaseProductCount,
  deleteProduct,
  increaseProductCount,
} from "@/ReduxToolkit/features/shoppingCartSlice";
import { FiMinus } from "react-icons/fi";

const ProductItemInShoppingCart: React.FC<
  ProductInterfacePropsInShoppingCard
> = ({ data, isBorder }) => {
  const { id, name, price, image, brand, colors, discountPercentage, count } =
    data;
  const dispatch = useAppDispatch();
  return (
    <div
      className={`flex border-slate-400 gap-x-6 lg:gap-x-12 p-8 ${
        !isBorder ? "border-b-[1px]" : null
      }`}
    >
      {/* image and count  */}
      <div className="flex flex-col justify-between items-center">
        <Image
          className="rounded"
          src={`/images/${image}`}
          alt="Description"
          width={150}
          height={150}
        ></Image>
        <span className="flex">
          <button
            onClick={() => dispatch(increaseProductCount(data))}
            className="py-[6px] px-[10px] rounded-s bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
          >
            <FaPlus />
          </button>
          <button className="py-[6px] px-[10px] bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center">
            {count ? englishNumbersToPersian(count.toString()) : null}
          </button>
          {count && count > 1 ? (
            <button
              onClick={() => dispatch(decreaseProductCount(data))}
              className="py-[6px] px-[10px] rounded-e bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
            >
              <FiMinus />
            </button>
          ) : (
            <button
              onClick={() => dispatch(deleteProduct(data))}
              className="py-[6px] px-[10px] rounded-e bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
            >
              <FaRegTrashAlt />
            </button>
          )}
        </span>
      </div>
      {/* details and price */}
      <div className="flex flex-col justify-between gap-6 text-sm">
        <div className="flex flex-col">
          <span className="text-lg font-bold">{name}</span>
          <div className="flex flex-col mt-4 gap-y-2 opacity-85">
            <span className="flex gap-x-2">
              <span className="w-4 h-4 bg-orange-400 rounded-full overflow-hidden p-[4px] flex"></span>
              <span>نارنجی</span>
            </span>
            <span className="flex gap-x-2">
              <span>
                <IoShieldCheckmarkSharp size={17} color="red" />
              </span>
              <span>گارانتی 12 ماهه لیتو</span>
            </span>
            <span className="flex gap-x-2">
              <MdDeliveryDining size={17} color="red" />
              <span>ارسال دیجی کالا</span>
            </span>
            <span className="flex gap-x-2">
              <TbTruckDelivery size={17} color="green" />
              <span>ارسال امروز (فعلا در شهر تهران و کرج)</span>
            </span>
          </div>
        </div>
        <span className="text-lg font-medium">
          قیمت:{" "}
          {count
            ? calculateTotalPriceOfOneProduct(price, discountPercentage, count)
            : null}
        </span>
      </div>
    </div>
  );
};

export default ProductItemInShoppingCart;
