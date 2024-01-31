"use client";
import { setProductType } from "@/ReduxToolkit/features/productFilterSlice";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { LaptopIcon, MobileIcon, WatchIcon } from "@/helpers/Icons";
import { CategoryItemInNavbarPropsInterface } from "@/helpers/conteracts";

const CategoryItemInNavbar: React.FC<CategoryItemInNavbarPropsInterface> = ({
  id,
  text,
  isSelected,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  let itemType: string;
  const clickHandler = () => {
    onClick(id);
    id === 1 ? (itemType = "allProduct") : null;
    id === 2 ? (itemType = "mobile") : null;
    id === 3 ? (itemType = "laptop") : null;
    id === 4 ? (itemType = "watch") : null;
    dispatch(setProductType(itemType));
  };

  return (
    <li
      className={`mb-4 cursor-pointer ${isSelected ? "opacity-100" : "opacity-30"}`}
      onClick={clickHandler}
    >
      <div className="flex justify-start items-center text-slate-800">
        {id === 1 ? <MobileIcon /> : null}
        {id === 2 ? <MobileIcon /> : null}
        {id === 3 ? <LaptopIcon /> : null}
        {id === 4 ? <WatchIcon /> : null}
        <span className="mr-2">{text}</span>
      </div>
    </li>
  );
};

export default CategoryItemInNavbar;
