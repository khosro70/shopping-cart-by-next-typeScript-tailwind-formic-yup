import Image from "next/image";

import { ProductDetailsInterfaceProps } from "@/helpers/conteracts";

import NameAdnDeateils from "../modules/ProductDeatailModules/NameAdnDeateils";
import PriceAndAddtoBasket from "../modules/ProductDeatailModules/PriceAndAddtoBasket";

const ProductDetails: React.FC<ProductDetailsInterfaceProps> = ({
  productData,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {/* image */}
      <div className="w-full lg:w-2/5 bg-gray-50 p-2 pr-0 h-fit">
        <Image
          className="w-full rounded"
          src={`/images/${productData?.image}`}
          alt="product image"
          width={150}
          height={150}
          priority={productData?.image === "MacBook Air MGN63 2020.jpg"}
        ></Image>
      </div>
      <div className="flex flex-col w-full md:flex-row lg:w-3/5 gap-2">
        {/* name and datails */}
        <NameAdnDeateils productData={productData} />
        {/* price and addTo Basket */}
        <PriceAndAddtoBasket productData={productData} />
      </div>
    </div>
  );
};

export default ProductDetails;
