export interface BurgerMenuInterfaceProps {
  handleOutsideClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductInterfaceProps {
  key: number;
  data: {
    id: number;
    name: string;
    price: string;
    image: string;
    brand: string;
    type: string;
    colors: string[];
  };
}

export interface ProductDetailsInterfaceProps {
  name: string | undefined;
  price: string | undefined;
  image: string | undefined;
  brand: string | undefined;
  type: string | undefined;
  colors: string[] | undefined;
}

export interface productInterface {
  id: number;
  name: string;
  price: string;
  image: string;
  brand: string;
  type: string;
  saleNumber: number;
  Popularity: number;
  colors: string[];
}

export interface CategoryItemInNavbarPropsInterface {
  id: number;
  text: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}
