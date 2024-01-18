"use client";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

interface propsInterface {
  name: string;
}

const ProductDetails: React.FC<propsInterface> = ({ name }) => {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-bold">{name}</span>
      <div className="flex flex-col mt-4 gap-y-2 opacity-85">
        <span className="flex gap-x-2">
          <span className="w-4 h-4 bg-orange-400 rounded-full overflow-hidden p-[4px] flex"></span>
          <span>نارنجی</span>
        </span>
        <span className="flex gap-x-2">
          <span>
            <IoShieldCheckmarkSharp size={17} color="red" />
          </span>
          <span>گارانتی 12 ماهه لیتو</span>
        </span>
        <span className="flex gap-x-2">
          <MdDeliveryDining size={17} color="red" />
          <span>ارسال دیجی کالا</span>
        </span>
        <span className="flex gap-x-2">
          <TbTruckDelivery size={17} color="green" />
          <span>ارسال امروز (فعلا در شهر تهران و کرج)</span>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
