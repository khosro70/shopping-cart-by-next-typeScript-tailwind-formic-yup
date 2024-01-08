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
