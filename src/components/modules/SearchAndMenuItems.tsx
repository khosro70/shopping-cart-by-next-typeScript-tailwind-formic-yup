import { DigitaizIcon, SearchIcon } from "@/helpers/Icons";
import { menuItems } from "@/helpers/menuItems";
import Link from "next/link";
import React from "react";

const SearchAndMenuItems: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link className="ml-4" href="#">
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
      <div className="hidden lg:flex justify-center items-center max-w-[240px] lg:w-1/5 bg-stone-200 p-2 mr-2 md:mr-10 lg:mr-3 xl:mr-32 rounded flex-auto">
        <button>
          <SearchIcon />
        </button>
        <input
          className="flex-1 bg-stone-200 mr-2 focus:outline-none text text-slate-600"
          placeholder="جست و جوی نام محصول و ..."
        />
      </div>
    </>
  );
};

export default SearchAndMenuItems;
