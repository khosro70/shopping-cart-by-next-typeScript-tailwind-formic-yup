import { NextPage } from "next";

import ProductPage from "@/components/templates/ProductPage";

interface ProductPagePropsInterface {
  params: {
    productId: string;
  };
}

const Product: NextPage<ProductPagePropsInterface> = ({ params }) => {
  return <ProductPage params={params} />;
};

export default Product;
