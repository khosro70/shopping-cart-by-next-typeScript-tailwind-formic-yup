import Header from "@/components/modules/Header";

import { NextPage } from "next";
import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";

interface ProductPagePropsInterface {
  params: {
    productId: string;
  };
}

const ProductPage: NextPage<ProductPagePropsInterface> = ({ params }) => {
  const product: productInterface | undefined = productsData.find(
    (p) => p.id === Number(params.productId)
  );

  let name, price, image, brand, type: string | undefined;
  let saleNumber, Popularity: number | undefined;

  if (product) {
    name = product.name;
    price = product.price;
    image = product.image;
    brand = product.brand;
    type = product.type;
    saleNumber = product.saleNumber;
    Popularity = product.Popularity;
  }
  return (
    <div>
      <Header />
      <main className="h-fit container mx-auto 2xl:max-w-screen-2xl px-4 mt-28">
        {params.productId}
      </main>
    </div>
  );
};

export default ProductPage;
