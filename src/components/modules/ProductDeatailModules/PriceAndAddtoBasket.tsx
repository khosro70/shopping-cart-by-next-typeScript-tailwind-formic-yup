import {
  addProduct,
  decreaseProductCount,
  deleteProduct,
  increaseProductCount,
} from "@/ReduxToolkit/features/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "@/ReduxToolkit/hooks";
import { ProductDetailsInterfaceProps } from "@/helpers/conteracts";
import {
  calculateDiscountedPrice,
  englishNumbersToPersian,
  findProductInSelectedProduct,
} from "@/helpers/functions";
import React from "react";
import { FaExclamationCircle, FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const PriceAndAddtoBasket: React.FC<ProductDetailsInterfaceProps> = ({
  productData,
}) => {
  const dispatch = useAppDispatch();

  const selectedProducts = useAppSelector(
    (state) => state.shoppingCartStates.products
  );

  const selectedProduct = findProductInSelectedProduct(
    selectedProducts,
    productData?.id
  );

  const clickHandler: any = () => {
    dispatch(addProduct(productData));
  };

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
          {productData?.discountPercentage ? (
            <div className="flex mb-1">
              <span className="opacity-60 line-through">
                {productData?.price
                  ? englishNumbersToPersian(productData?.price)
                  : ""}
              </span>
              <span className="mr-2 w-5 h-5 p-3 rounded-2xl bg-red-800 text-slate-50 flex justify-center items-center">
                {englishNumbersToPersian(productData?.discountPercentage)}%
              </span>
            </div>
          ) : null}
          <div>
            <span>
              {productData
                ? calculateDiscountedPrice(
                    productData.price,
                    productData.discountPercentage
                  )
                : ""}
              <span> تومان</span>
            </span>
            <span></span>
          </div>
        </div>
        {selectedProduct ? (
          <div className="mt-3 xl:mt-12 flex justify-start items-center gap-x-2">
            <div className="flex gap-x-2">
              <button
                className="p-[10px] rounded bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
                onClick={() => dispatch(increaseProductCount(selectedProduct))}
              >
                <FaPlus />
              </button>
              {selectedProduct?.count > 1 ? (
                <button
                  className="p-[10px] rounded bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
                  onClick={() =>
                    dispatch(decreaseProductCount(selectedProduct))
                  }
                >
                  <FiMinus />
                </button>
              ) : (
                <button
                  className="p-[10px] rounded bg-orange-700 hover:bg-orange-600 text-slate-50 flex justify-center items-center"
                  onClick={() => dispatch(deleteProduct(selectedProduct))}
                >
                  <FaRegTrashAlt />
                </button>
              )}
            </div>
            <span className="mr-3">
              <span className="text-lg">
                {englishNumbersToPersian(selectedProduct?.count.toString())}
              </span>
              <span className="mr-2">عدد در سبد شما</span>
            </span>
          </div>
        ) : (
          <button
            onClick={clickHandler}
            className="mt-3 xl:mt-12 rounded transition bg-orange-700 hover:bg-orange-600 p-2 text-slate-50 flex justify-center items-center w-full"
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </>
  );
};

export default PriceAndAddtoBasket;
