export interface BurgerMenuInterfaceProps {
  handleOutsideClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchAndMenuItemsInterfaceProps {
  productsData: productInterface[];
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
    discountPercentage: string;
    colors: string[];
    count?: number;
  };
}
export interface ContactUsFormValuesInterface {
  subject: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  orderNumber: string;
  message: string;
}

export interface ProductInterfacePropsInShoppingCard {
  key: number;
  data: {
    id: number;
    name: string;
    price: string;
    image: string;
    brand: string;
    type: string;
    discountPercentage: string;
    colors: string[];
    count?: number;
  };
  isBorder: boolean;
}

export interface ProductDetailsInterfaceProps {
  productData: productInterface | undefined;
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
  discountPercentage: string;
}

export interface productIterfaceInShopCart {
  id: number;
  name: string;
  price: string;
  image: string;
  brand: string;
  type: string;
  saleNumber: number;
  Popularity: number;
  colors: string[];
  discountPercentage: string;
  count: number;
}

export interface initialStateInterfaceInShopCart {
  product: productIterfaceInShopCart | undefined;
  products: productIterfaceInShopCart[];
  allProductsNumber: number;
  totalProductPrice: number;
  productCount: number;
}

export interface CategoryItemInNavbarPropsInterface {
  id: number;
  text: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}
