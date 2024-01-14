import { productInterface } from "./conteracts";

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

  if (discountPercentage === undefined) {
    return initialPrice;
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
