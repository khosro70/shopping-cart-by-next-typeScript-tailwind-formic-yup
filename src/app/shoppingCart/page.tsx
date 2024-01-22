"use client";
import Header from "@/components/modules/shared/Header";

import { NextPage } from "next";

import Footer from "@/components/modules/shared/Footer";

import { useAppSelector } from "@/ReduxToolkit/hooks";
import ProductItemInShoppingCart from "@/components/modules/shoppingCartModules/ProductItemInShoppingCart";
import { englishNumbersToPersian } from "@/helpers/functions";
import { Empty_Cart } from "@/helpers/Icons";
import Link from "next/link";
import { useState } from "react";

const ShoppingCartPage: NextPage = () => {
  const [displayCount, setDisplayCount] = useState(2);
  const states = useAppSelector((state) => state.shoppingCartStates);
  const handleShowAll = () => {
    setDisplayCount(states.products.length);
  };

  return (
    <div>
      <Header />
      <main
        className={`container mx-auto mt-28 px-4 flex flex-col lg:flex-row gap-x-4 w-full min-h-[calc(100vh-150px)] ${
          states.productCount < 1 ? "justify-center" : null
        }`}
      >
        {states.productCount > 0 ? (
          <>
            <div className="w-full lg:w-[calc(100vw-384px)] bg-gray-50 px-4 py-2 border border-slate-300 rounded">
              <div className="text-md opacity-75 mb-6 border-b-2 border-orange-500 w-fit">
                <p>سبد خرید شما</p>
                <p className="pb-2">
                  {englishNumbersToPersian(states.products.length.toString())}{" "}
                  کالا
                </p>
              </div>
              {/* products */}
              <div className="flex flex-col gap-x-4">
                {states.products
                  .slice(0, displayCount)
                  .map((product, index) => (
                    <ProductItemInShoppingCart
                      key={product.id}
                      data={product}
                      isBorder={
                        index ==
                        states.products.slice(0, displayCount).length - 1
                      }
                    />
                  ))}
                {displayCount < states.products.length && (
                  <button
                    className="rounded p-2 bg-slate-200 font-medium hover:bg-slate-300 transition"
                    onClick={handleShowAll}
                  >
                    نمایش همه محصولات سبد خرید
                  </button>
                )}
              </div>
            </div>
            <div className="sticky left-0 top-28 mt-2 lg:mt-0 mx-auto flex flex-col w-full lg:w-96 bg-gray-50 h-44 p-6 justify-between border border-slate-300">
              <div className="flex justify-between text-md">
                <span>جمع سبد خرید</span>
                <span>
                  <span>
                    {englishNumbersToPersian(
                      states.totalProductPrice.toLocaleString()
                    )}
                  </span>
                  <span> تومان </span>
                </span>
              </div>
              <button className="font-bold rounded p-2 bg-orange-600 hover:bg-orange-700 transition text-slate-50">
                تایید و تکمیل سفارش
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Empty_Cart />
            <span className="font-bold text-2xl mt-6 mb-4">
              سبد خرید شما خالی است!
            </span>
            <span>
              می‌توانید برای مشاهده محصولات
              <Link href="/" className="text-orange-500">
                <span> اینجا </span>
              </Link>
              کلیک کنید
            </span>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCartPage;
