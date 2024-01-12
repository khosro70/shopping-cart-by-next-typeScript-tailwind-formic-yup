"use client";
import { fullProducts } from "@/ReduxToolkit/features/productFilterSlice";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { productsData } from "@/helpers/Datas";
import { LaptopIcon, MobileIcon, WatchIcon } from "@/helpers/Icons";
import { CategoryItemInNavbarPropsInterface } from "@/helpers/conteracts";
import Link from "next/link";

const CategoryItemInNavbar: React.FC<CategoryItemInNavbarPropsInterface> = ({
  id,
  text,
  isSelected,
  onClick,
}) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    // connect to server
    id === 1 ? allData() : null;
    id === 2 ? mobileData() : null;
    id === 3 ? laptopData() : null;
    id === 4 ? watchData() : null;
  };

  function allData() {
    let data = productsData;
    dispatch(fullProducts(data));
  }
  function mobileData() {
    let data = productsData.filter((item) => item.type === "mobile");
    // dispatch(mobileProducts(data));
  }
  function laptopData() {
    let data = productsData.filter((item) => item.type === "laptop");
    // dispatch(laptopProducts(data));
  }
  function watchData() {
    let data = productsData.filter((item) => item.type === "watch");
    // dispatch(watchProducts(data));
  }

  return (
    <li
      className={`mb-4 ${isSelected ? "opacity-100" : "opacity-30"}`}
      onClick={() => onClick(id)}
    >
      <Link href="#">
        <div
          className="flex justify-start items-center text-slate-800"
          onClick={clickHandler}
        >
          {id === 1 ? <MobileIcon /> : null}
          {id === 2 ? <LaptopIcon /> : null}
          {id === 3 ? <WatchIcon /> : null}
          {id === 4 ? <MobileIcon /> : null}
          <span className="mr-2">{text}</span>
        </div>
      </Link>
    </li>
  );
};

export default CategoryItemInNavbar;
