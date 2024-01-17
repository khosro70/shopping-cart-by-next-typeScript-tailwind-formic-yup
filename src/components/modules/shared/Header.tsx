"use client";
// components
import BurgerMenu from "@/components/modules/homePageModules/BurgerMenu";

import { BurgerIcon, LoginIcon, ShoppingCartIcon } from "@/helpers/Icons";
import Link from "next/link";
import { useState } from "react";
import SearchAndMenuItems from "../homePageModules/SearchAndMenuItems";
import { useAppSelector } from "@/ReduxToolkit/hooks";
import { englishNumbersToPersian } from "@/helpers/functions";

export default function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  const shopCartState = useAppSelector((state) => state.shoppingCartStates);
  const handleOutsideClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ): void => {
    if (
      openBurger &&
      !event.currentTarget.closest(".classForCloseBurgerOnOutsideClick")
    ) {
      setOpenBurger(false);
    }
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 shadow-lg bg-stone-50 mb-6 z-10">
        <div className="relative flex container mx-auto 2xl:max-w-screen-2xl w-full py-6 px-4 justify-between items-center">
          <button
            className="lg:hidden"
            onClick={() => setOpenBurger(!openBurger)}
          >
            <BurgerIcon />
          </button>
          <SearchAndMenuItems />
          <div className="flex justify-start lg:mr-3">
            <div className="relative p-2 border rounded transition-all font-semibold hover:bg-blue-400 hover:text-white">
              <Link
                className="flex justify-center items-center text-sm"
                href="/shoppingCart"
              >
                <ShoppingCartIcon />
                <span className="mr-2 lg:text-sm">سبد خرید</span>
                {shopCartState.productCount > 0 ? (
                  <span className="absolute -top-2 rounded-full bg-green-600 flex justify-center items-center p-1 w-6 h-6 -right-2 text-slate-50">
                    {englishNumbersToPersian(shopCartState.productCount.toString())}
                  </span>
                ) : null}
              </Link>
            </div>
            <div className="p-2 mr-[2px] border rounded transition-all font-semibold hover:bg-blue-400 hover:text-white">
              <Link
                className="flex justify-center items-center text-sm"
                href="#"
              >
                <LoginIcon />
                <span className="mr-2 lg:text-sm">ورود</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BurgerMenu
        handleOutsideClick={handleOutsideClick}
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
      />
    </>
  );
}
