"use client";
import { menuItems, productsData } from "@/helpers/Datas";
import { DigitaizIcon, SearchIcon } from "@/helpers/Icons";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SearchAndMenuItems: React.FC = () => {
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
      <div className="flex justify-center items-center">
        <Link href="/" className="ml-4">
          <DigitaizIcon />
        </Link>
        <ul className="hidden lg:flex justify-center items-center text-slate-800 lg:text-sm xl:text-base">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="lg:mx-[7px] xl:mx-3 StyleMenuItem font-medium"
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative hidden lg:flex justify-center items-center max-w-[260px] lg:w-1/5 bg-stone-200 px-1 mr-2 md:mr-10 lg:mr-3 xl:mr-32 rounded flex-auto">
        <button>
          <SearchIcon />
        </button>
        <input
          className="flex-1 border-none bg-stone-200 mr-2 focus:border-none focus:outline-none focus:ring-0 text text-slate-600"
          placeholder="جست و جوی نام محصول و ..."
          onChange={handleSearchChange}
        />
        {searchValue.length > 0 && isListVisible ? (
          <ul
            ref={ulRef}
            className="absolute top-14 right-0 w-full bg-slate-50 rounded p-2 border-slate-300 border-[1px]"
          >
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <li
                  className={`p-2 text-sm ${
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
              <li key="1">موردی یافت نشد</li>
            )}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default SearchAndMenuItems;
