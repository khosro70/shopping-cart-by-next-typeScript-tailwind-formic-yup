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
  };
}
