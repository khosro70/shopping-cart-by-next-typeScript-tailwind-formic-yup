import { LaptopIcon, MobileIcon, WatchIcon } from "@/helpers/Icons";
import Link from "next/link";

interface CategoryItemInNavbarProps {
  id: number;
  text: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}

const CategoryItemInNavbar: React.FC<CategoryItemInNavbarProps> = ({
  id,
  text,
  isSelected,
  onClick,
}) => {
  return (
    <li
      className={`mb-4 ${isSelected ? "opacity-100" : "opacity-30"}`}
      onClick={() => onClick(id)}
    >
      <Link href="#">
        <div className="flex justify-start items-center text-slate-800">
          {id === 1 ? <MobileIcon /> : null}
          {id === 2 ? <LaptopIcon /> : null}
          {id === 3 ? <WatchIcon /> : null}
          <span className="mr-2">{text}</span>
        </div>
      </Link>
    </li>
  );
};

export default CategoryItemInNavbar;
