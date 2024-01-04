"use client";

import React from "react";
import CategoryInNavbar from "./CategoryInNavbar";
import ProductBrands from "./ProductBrands";
import ProductColors from "./ProductColors";
import Image from "next/image";

// images
import DesktopNavbarBaner from "../../../public/images/BannerInNavbar.png";
import Link from "next/link";

const DesktopNavbar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-gray-50 rounded py-5 px-4 overflow-auto desktopFilter h-fit fixed lg:w-52">
      <h3 className="font-bold text-orange-400 mb-5">دسته بندی</h3>
      <CategoryInNavbar />
      <h3 className="font-bold mb-5 text-orange-400">فیلتر</h3>
      <ProductBrands />
      <ProductColors />
      <Link href="#">
        <Image
          src={DesktopNavbarBaner}
          alt="SmartWatch"
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
};

export default DesktopNavbar;
