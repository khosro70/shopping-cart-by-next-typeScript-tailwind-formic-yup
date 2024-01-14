import React from "react";
import DigiTaizDepartmentInFooter from "./DigiTaizDepartmentInFooter";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto 2xl:max-w-screen-2xl px-4 pt-10 pb-10 w-full mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-x-4 gap-y-8">
        <div>
          <ul className="flex flex-col gap-y-4">
            <li className="font-semibold">با دیجی تایز</li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                فروش در دیجی تایز
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                فرصت های شغلی
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                گزارش تخلف در دیجی تایز
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                درباره ی ما
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-y-4">
            <li className="font-semibold">خدمات مشتریان</li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                پاسخ به پرسش های متداول
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                رویه های بازگرداندن کالا
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                حریم خصوصی
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-y-4">
            <li className="font-semibold">راهنمای خرید از دیجی تایز</li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                نحوه ی ثبت سفارش
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                رویه ارسال سفارش
              </Link>
            </li>
            <li>
              <Link
                className=" text-slate-800 hover:text-yellow-600 transition-all"
                href="#"
              >
                بازگرداندن کالا
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <div>
            <p className="font-semibold">همراه ما باشید</p>
            <ul className="flex justify-end gap-x-4 mt-2">
              <li>
                <Link
                  className=" text-slate-800 hover:text-yellow-600 transition-all"
                  href="#"
                >
                  <FaInstagram size={30} />
                </Link>
              </li>
              <li>
                <Link
                  className=" text-slate-800 hover:text-yellow-600 transition-all"
                  href="#"
                >
                  <FaTwitter size={30} />
                </Link>
              </li>
              <li>
                <Link
                  className=" text-slate-800 hover:text-yellow-600 transition-all"
                  href="#"
                >
                  <FaLinkedin size={30} />
                </Link>
              </li>
              <li>
                <Link
                  className=" text-slate-800 hover:text-yellow-600 transition-all"
                  href="#"
                >
                  <FaTelegram size={30} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start mt-6">
            <p className="font-semibold">ایمیل بده تخفیف بگیر</p>
            <div className="flex justify-end items-center mt-2">
              <input
                className="max-w-80 border-none bg-stone-200 mr-2 focus:border-none focus:outline-none focus:ring-0 text text-slate-600 rounded"
                type="email"
                placeholder="ایمیل شما"
              />
              <button className="mr-4 bg-slate-500 hover:text-slate-50 hover:bg-slate-700 p-[6px] px-2 rounded">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
      <DigiTaizDepartmentInFooter />
    </div>
  );
};

export default Footer;
