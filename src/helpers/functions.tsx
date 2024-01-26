import { Bounce, toast } from "react-toastify";
import { productInterface, productIterfaceInShopCart } from "./conteracts";

export function englishNumbersToPersian(input: string): string {
  const persianNumbers: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return input.replace(/[0-9]/g, (char) => persianNumbers[char]);
}

export const comparePricesHighToLow = (
  a: productInterface,
  b: productInterface
): any => {
  const priceA = parseFloat(a.price.replace(/,/g, ""));
  const priceB = parseFloat(b.price.replace(/,/g, ""));

  if (priceA > priceB) {
    return -1;
  } else if (priceA < priceB) {
    return 1;
  } else {
    return 0;
  }
};

export const comparePricesLowToHigh = (
  a: productInterface,
  b: productInterface
): any => {
  const priceA = parseFloat(a.price.replace(/,/g, ""));
  const priceB = parseFloat(b.price.replace(/,/g, ""));

  if (priceA > priceB) {
    return 1;
  } else if (priceA < priceB) {
    return -1;
  } else {
    return 0;
  }
};

export function calculateDiscountedPrice(
  initialPrice: string | undefined,
  discountPercentage: string
): number | string | undefined {
  let parsedInitialPrice: number | undefined;
  if (typeof initialPrice === "string") {
    parsedInitialPrice = parseFloat(initialPrice.replace(/,/g, ""));
  }
  const parsedInitialDiscountPercentage = parseFloat(discountPercentage);

  if (!discountPercentage && initialPrice) {
    return englishNumbersToPersian(initialPrice.toLocaleString());
  }
  if (parsedInitialPrice !== undefined) {
    const discountAmount: number =
      (parsedInitialPrice * parsedInitialDiscountPercentage) / 100;
    const discountedPrice: number = parsedInitialPrice - discountAmount;
    const formattedDiscountedPrice: string = englishNumbersToPersian(
      discountedPrice.toLocaleString()
    );
    return formattedDiscountedPrice;
  }
}

 export const notifySuccessLogin = () =>toast.success("با موفقیت وارد شدید !", {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  });

 export const notifySuccessSendMessage = () =>toast.success("پیام شما با موفقیت ارسال شد !", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  });

export function filterProducts(
  data: productInterface[],
  filterOptions: {
    type?: string;
    brand?: string[];
    color?: string[];
  },
  navFilterType: string
): productInterface[] {
  const { type, brand, color } = filterOptions;

  const products = data.filter((product) => {
    console.log(product.type);
    const matchType =
      !type || type.includes(product.type) || type === "allProduct";
    const matchBrand =
      !brand || brand.length === 0 || brand.includes(product.brand);
    const matchColor =
      !color ||
      color.length === 0 ||
      color.some((c) => product.colors.includes(c));

    return matchType && matchBrand && matchColor;
  });
  switch (navFilterType) {
    case "محبوب ترین ها":
      return products.sort((a, b) => b.Popularity - a.Popularity);
    case "گران ترین ها":
      return products.sort(
        (a, b) =>
          parseFloat(b.price.replace(/,/g, "")) -
          parseFloat(a.price.replace(/,/g, ""))
      );
    case "ارزان ترین ها":
      return products.sort(
        (a, b) =>
          parseFloat(a.price.replace(/,/g, "")) -
          parseFloat(b.price.replace(/,/g, ""))
      );
    default:
      return products;
  }
}

export const findProductInSelectedProduct = (
  products: productIterfaceInShopCart[],
  id: number | undefined
): productIterfaceInShopCart | undefined => {
  const product = products.find((product) => product.id === id);
  return product;
};

export const calculateTotalPriceAndCounts = (
  products: productIterfaceInShopCart[]
): {
  allProductsNumber: number;
  totalProductPrice: number;
  productCount: number;
} => {
  const totalCount = products.reduce((acc, product) => acc + product.count, 0);
  const productCount = products.length;
  const totalProductPrice = products.reduce((acc, product) => {
    const productPrice = product.discountPercentage
      ? applyDiscountToPriceInShoppingCartSlice(
          product.price,
          product.discountPercentage
        )
      : parseFloat(product.price.replace(/,/g, ""));
    if (typeof productPrice === "number") {
      return acc + product.count * productPrice;
    } else {
      return acc;
    }
  }, 0);

  return {
    allProductsNumber: totalCount,
    totalProductPrice: totalProductPrice,
    productCount: productCount,
  };
};

export function applyDiscountToPriceInShoppingCartSlice(
  price: string,
  discountPercentage: string
) {
  const priceNumber = parseFloat(price.replace(/,/g, ""));

  const discountAmount = (Number(discountPercentage) / 100) * priceNumber;

  const discountedValue = priceNumber - discountAmount;

  const result = discountedValue.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return parseFloat(result.replace(/,/g, ""));
}

export function calculateTotalPriceOfOneProduct(
  price: string,
  discountPercentage: string,
  count: number
) {
  const Price = parseFloat(price.replace(/,/g, ""));
  const discount = parseFloat(discountPercentage);

  let discountedPrice: number;
  let result: number;
  if (discount) {
    discountedPrice = Price - (Price * discount) / 100;
    result = count * discountedPrice;
  } else {
    discountedPrice = Price;
    result = count * discountedPrice;
  }

  const resultString = englishNumbersToPersian(result.toLocaleString());

  return resultString;
}
