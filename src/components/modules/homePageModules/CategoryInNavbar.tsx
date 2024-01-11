import { useState } from "react";
import CategoryItemInNavbar from "./CategoryItemInNavbar";

const CategoryInNavbar: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<number>(1);

  const handleItemClick = (id: number) => {
    setSelectedItemId((prevId) => (prevId === id ? id : id));
  };

  const items = [
    { id: 1, text: "تمام محصولات" },
    { id: 2, text: "تلفن همراه" },
    { id: 3, text: "لپ تاپ" },
    { id: 4, text: "ساعت هوشمند" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <CategoryItemInNavbar
          key={item.id}
          id={item.id}
          text={item.text}
          isSelected={selectedItemId === item.id}
          onClick={handleItemClick}
        />
      ))}
    </ul>
  );
};

export default CategoryInNavbar;
