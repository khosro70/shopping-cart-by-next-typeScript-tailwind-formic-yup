import { CloseIcon, SearchIcon } from "@/helpers/Icons";
import { menuItems } from "@/helpers/menuItems";
import Link from "next/link";
import React from "react";

interface BurgerMenuInterfaceProps {
  handleOutsideClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuInterfaceProps> = ({
  handleOutsideClick,
  openBurger,
  setOpenBurger,
}: BurgerMenuInterfaceProps) => {
  return (
    <>
      <div
        onClick={handleOutsideClick}
        className={`fixed w-screen h-screen bg-gray-500 z-10 top-0 bottom-0 right-0 left-0 opacity-50 ${
          openBurger ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`classForCloseBurgerOnOutsideClick w-64 bg-gray-300 h-screen right-0 transition-all top-0 opacity-100 fixed z-20 p-6 ${
          openBurger ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setOpenBurger(!openBurger)} role="button">
            <CloseIcon />
          </button>
        </div>
        <div className="flex justify-center items-center mb-5 bg-stone-200 p-1 rounded">
          <button>
            <SearchIcon />
          </button>
          <input
            className="flex-1 bg-stone-200 mr-2 text-sm focus:outline-none text-slate-600"
            placeholder="جست و جوی محصول و ..."
          />
        </div>
        <div>
          <ul className="flex flex-col text-slate-800 text-base">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="mx-2 my-1 font-medium hover:bg-blue-100 p-1 rounded"
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
