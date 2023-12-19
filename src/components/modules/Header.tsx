import {
  BurgerIcon,
  DigitaizIcon,
  LoginIcon,
  SearchIcon,
} from "@/helpers/Icons";
import { menuItems } from "@/helpers/menuItems";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex container mx-auto 2xl:max-w-screen-2xl w-full py-6 px-10 bg-stone-50 justify-between items-center">
      <button className="lg:hidden">
        <BurgerIcon />
      </button>
      <div className="flex justify-center items-center">
        <Link className="ml-4" href="#">
          <DigitaizIcon />
        </Link>
        <ul className="hidden lg:flex justify-center items-center text-slate-800 lg:text-sm xl:text-base">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="lg:mx-2 xl:mx-3 StyleMenuItem font-medium"
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex justify-center items-center max-w-[280px] lg:w-1/4 bg-stone-200 p-2 mr-2 md:mr-12 rounded flex-auto">
        <button>
          <SearchIcon />
        </button>
        <input
          className="flex-1 bg-stone-200 mr-2 focus:outline-none text text-slate-600"
          placeholder="جست و جوی نام محصول و ..."
        />
      </div>
      <div className="p-2 lg:mr-8 border rounded transition-all font-semibold  hover:bg-blue-500 hover:text-white">
        <Link className="flex justify-center items-center text-sm" href="#">
          <LoginIcon />
          <span className="mr-2 text-base">ورود</span>
        </Link>
      </div>
    </div>
  );
}
