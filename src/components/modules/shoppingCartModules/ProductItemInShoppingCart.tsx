"use client";

import Image from "next/image";

import { ProductInterfacePropsInShoppingCard } from "@/helpers/conteracts";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

import {
  calculateTotalPriceOfOneProduct,
  englishNumbersToPersian,
} from "@/helpers/functions";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/hooks";
import {
  decreaseProductCount,
  deleteProduct,
  increaseProductCount,
} from "@/ReduxToolkit/features/shoppingCartSlice";
import { FiMinus } from "react-icons/fi";
import ProductDetails from "./ProductDetails";
import { useState } from "react"; 

const ProductItemInShoppingCart: React.FC<
  ProductInterfacePropsInShoppingCard
> = ({ data, isBorder }) => {
  const [updateComponent, setUpdateComponent] = useState(true);
  const { id, name, price, image, brand, colors, discountPercentage, count } =
    data;
    const shopCartState = useAppSelector((state) => state.shoppingCartStates);
    const dispatch = useAppDispatch();
  if (typeof window !== "undefined") {
    localStorage.setItem("shoppCartState", JSON.stringify(shopCartState));
  }
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
              onClick={() => {
                dispatch(deleteProduct(data));
                setUpdateComponent(!updateComponent);
              }}
              className="py-[6px] px-[10px] rounded-e bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
            >
              <FaRegTrashAlt />
            </button>
          )}
        </span>
      </div>
      {/* details and price */}
      <div className="flex flex-col justify-between gap-6 text-sm">
        <ProductDetails name={name} />
        <span className="text-lg font-medium">
          قیمت:
          {count
            ? calculateTotalPriceOfOneProduct(price, discountPercentage, count)
            : null}
        </span>
      </div>
    </div>
  );
};

export default ProductItemInShoppingCart;
