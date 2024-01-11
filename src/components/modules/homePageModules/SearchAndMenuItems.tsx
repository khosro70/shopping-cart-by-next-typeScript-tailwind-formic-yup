import { menuItems } from "@/helpers/Datas";
import { DigitaizIcon, SearchIcon } from "@/helpers/Icons";
import Link from "next/link";
import React from "react";

const SearchAndMenuItems: React.FC = () => {
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
      <div className="hidden lg:flex justify-center items-center max-w-[260px] lg:w-1/5 bg-stone-200 px-1 mr-2 md:mr-10 lg:mr-3 xl:mr-32 rounded flex-auto">
        <button>
          <SearchIcon />
        </button>
        <input
          className="flex-1 border-none bg-stone-200 mr-2 focus:border-none focus:outline-none focus:ring-0 text text-slate-600"
          placeholder="جست و جوی نام محصول و ..."
        />
      </div>
    </>
  );
};

export default SearchAndMenuItems;
