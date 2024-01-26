"use client";
import { CloseIcon, SearchIcon } from "@/helpers/Icons";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { BurgerMenuInterfaceProps } from "@/helpers/conteracts";
import { menuItems, productsData } from "@/helpers/Datas";

const BurgerMenu: React.FC<BurgerMenuInterfaceProps> = ({
  handleOutsideClick,
  openBurger,
  setOpenBurger,
}: BurgerMenuInterfaceProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isListVisible, setListVisible] = useState<boolean>(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setListVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
        setListVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  let filteredProducts;
  if (searchValue.length !== 0) {
    filteredProducts = productsData.filter((product) =>
      product.name.includes(searchValue)
    );
  }

  return (
    <>
      <div
        onClick={handleOutsideClick}
        className={`fixed z-10 w-screen h-screen bg-gray-300 top-0 bottom-0 right-0 left-0 opacity-50 ${
          openBurger ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed classForCloseBurgerOnOutsideClick w-64 bg-stone-100 h-screen right-0 transition-all top-0 opacity-100 z-20 p-6 ${
          openBurger ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setOpenBurger(!openBurger)} role="button">
            <CloseIcon />
          </button>
        </div>
        <div className="relative flex justify-center items-center mb-5 bg-stone-200 rounded pr-3">
          <button>
            <SearchIcon />
          </button>
          <input
            className="flex-1 pl-0 border-none rounded bg-stone-200 text-sm focus:outline-none focus:ring-0 text-slate-600"
            placeholder="جست و جوی محصول و ..."
            onChange={handleSearchChange}
          />
          {searchValue.length > 0 && isListVisible ? (
            <ul
              ref={ulRef}
              className="absolute top-10 right-0 w-full bg-stone-200 rounded border-slate-300 border-[1px] z-20 text-sm"
            >
              {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <li
                    className={`p-2 text-sm hover:bg-slate-300 ${
                      index !== filteredProducts.length - 1
                        ? "border-b border-slate-300"
                        : ""
                    }`}
                    key={product.id}
                  >
                    <Link href={`/${product.id}`}>{product.name}</Link>
                  </li>
                ))
              ) : (
                <li className="p-2" key="1">موردی یافت نشد</li>
              )}
            </ul>
          ) : null}
        </div>
        <div>
          <ul className="flex flex-col text-slate-800 text-base">
            {menuItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <li className="mx-2 my-1 font-medium hover:bg-blue-100 p-1 rounded">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
