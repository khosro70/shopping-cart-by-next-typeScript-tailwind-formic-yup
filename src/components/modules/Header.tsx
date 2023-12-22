"use client";
// components
import BurgerMenu from "@/components/modules/BurgerMenu";

import { BurgerIcon, LoginIcon, ShoppingCartIcon } from "@/helpers/Icons";
import Link from "next/link";
import { useState } from "react";
import SearchAndMenuItems from "./SearchAndMenuItems";

export default function Header() {
  const [openBurger, setOpenBurger] = useState(false);
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
    <div>
      <div className="relative flex container mx-auto 2xl:max-w-screen-2xl w-full py-6 px-10 lg:px-7 xl:px-10 bg-stone-50 justify-between items-center">
        <button
          className="lg:hidden"
          onClick={() => setOpenBurger(!openBurger)}
        >
          <BurgerIcon />
        </button>
        <SearchAndMenuItems />
        <div className="flex justify-start lg:mr-3">
          <div className="p-2 border rounded transition-all font-semibold hover:bg-blue-400 hover:text-white">
            <Link className="flex justify-center items-center text-sm" href="#">
              <ShoppingCartIcon />
              <span className="mr-2 lg:text-sm">سبد خرید</span>
            </Link>
          </div>
          <div className="p-2 mr-[2px] border rounded transition-all font-semibold hover:bg-blue-400 hover:text-white">
            <Link className="flex justify-center items-center text-sm" href="#">
              <LoginIcon />
              <span className="mr-2 lg:text-sm">ورود</span>
            </Link>
          </div>
        </div>
        <BurgerMenu
          handleOutsideClick={handleOutsideClick}
          openBurger={openBurger}
          setOpenBurger={setOpenBurger}
        />
      </div>
    </div>
  );
}
