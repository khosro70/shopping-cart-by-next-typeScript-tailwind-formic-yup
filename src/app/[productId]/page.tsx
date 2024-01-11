"use client";
import Header from "@/components/modules/shared/Header";

import { NextPage } from "next";
import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";

import SimilarProductPagination from "@/components/modules/ProductDeatailModules/SimilarProductPagination";

import FooterInProductDetails from "@/components/modules/ProductDeatailModules/FooterInProductDetails";
import ProductDetails from "@/components/templates/ProductDetails";

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
  let saleNumber, Popularity: number;
  let colors: string[] | undefined;

  if (product) {
    name = product.name;
    price = product.price;
    image = product.image;
    brand = product.brand;
    type = product.type;
    saleNumber = product.saleNumber;
    Popularity = product.Popularity;
    colors = product.colors;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-[105px] px-4">
        {/* bread crump */}
        <div className="flex justify-start px-3 py-2 bg-gray-50 rounded mb-2">
          <span className="ml-2">دیجی تایز</span>
          <span className="ml-2">/</span>
          <span className="ml-2">کالای دیجیتال</span>
          <span className="ml-2">/</span>
          <span className="ml-2 opacity-40">
            {type === "watch" ? "ساعت مچی" : null}
            {type === "laptop" ? "لپ تاپ" : null}
            {type === "mobile" ? "موبایل" : null}
          </span>
        </div>
        {/* productDetails */}
        <ProductDetails
          name={name}
          price={price}
          image={image}
          brand={brand}
          type={type}
          colors={colors}
        />
        {/* similarProducts */}
        <div className="mt-5">
          <span className="mb-3 block w-fit text-lg font-medium border-b-2 pb-2 border-orange-500">
            کالاهای مشابه
          </span>
          <SimilarProductPagination type={type} />
        </div>
      </main>
      {/* footer */}
      <FooterInProductDetails />
    </div>
  );
};

export default ProductPage;
