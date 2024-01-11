import Image from "next/image";
import React, { useState } from "react";
import { FaCheck, FaThumbsUp } from "react-icons/fa";

import { IoIosStar } from "react-icons/io";
interface NameAdnDeateilsInterpaceProps {
  name: string | undefined;
  colors: string[] | undefined;
}
const NameAdnDeateils: React.FC<NameAdnDeateilsInterpaceProps> = ({
  name,
  colors,
}) => {
  let indextActive;
  colors ? (indextActive = colors.length - 1) : null;

  const [selectedSpan, setSelectedSpan] = useState<number | null>(
    indextActive || 1
  );
  const handleSpanClick = (index: number | null): void => {
    setSelectedSpan(index);
  };

  return (
    <>
      {/* name and datails */}
      <div className="bg-gray-50 w-full lg:w-7/12 p-2 rounded mb-4 lg:mb-0">
        <p className="border-b pb-2 text-center font-bold text-lg md:text-sm lg:text-lg">
          {name}
        </p>
        <div className="text-xs flex mb-2 mt-3 lg:mb-5 lg:mt-5">
          <span className="ml-2 flex align-baseline">
            <span>
              <IoIosStar size={15} color="gold" />
            </span>
            <span>
              4.1 <span className="opacity-40">(امتیاز 13 خریدار)</span>
            </span>
          </span>
          <span className="ml-2 w-2 h-2 bg-slate-300 inline-block rounded-full"></span>
          <span className="ml-2">29دیدگاه</span>
          <span className="ml-2 w-2 h-2 bg-slate-300 inline-block rounded-full"></span>
          <span className="ml-2">30پرسش</span>
        </div>
        <div className="flex justify-start items-baseline text-xs mt-2 mb-3 lg:mb-4 lg:mt-5">
          <FaThumbsUp className="ml-1" size={12} color="green" />
          <span>۷۸% (۲۹۰ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.</span>
        </div>
        {/* colors */}
        <div>
          <p>رنگ ها:</p>
          <div className="flex mt-1 lg:mt-2">
            {colors
              ? colors.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => handleSpanClick(index)}
                    className={`w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 ml-2 ${
                      selectedSpan === index ? "ring-2 ring-offset-1" : null
                    } ${item === "قرمز" ? "bg-red-400" : null} ${
                      item === "زرد" ? "bg-yellow-400" : null
                    } ${item === "صورتی" ? "bg-pink-400" : null} ${
                      item === "آبی" ? "bg-blue-400" : null
                    } ${item === "سبز" ? "bg-green-400" : null} ${
                      item === "نارنجی" ? "bg-orange-400" : null
                    } rounded-full overflow-hidden p-[4px] flex justify-center items-center`}
                  >
                    {selectedSpan === index && (
                      <FaCheck className="text-white" />
                    )}
                  </span>
                ))
              : null}
          </div>
        </div>
        <div className="mt-5">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none text-orange-400 focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 outline-none border-slate-800 rounded"
          />
          <span className="mr-2">بیمه تجهیزات دیجیتال - بیمه پارسیان</span>
        </div>
      </div>
    </>
  );
};

export default NameAdnDeateils;
