"use client";
import { productsData } from "@/helpers/Datas";
import { productInterface } from "@/helpers/conteracts";
import SimilarProductPagination from "@/components/modules/ProductDeatailModules/SimilarProductPagination";
import ProductDetails from "@/components/templates/ProductDetails";
import React from "react";
interface ProductPagePropsInterface {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPagePropsInterface> = ({ params }) => {
  const product: productInterface | undefined = productsData.find(
    (p) => p.id === Number(params.productId)
  );

  let type: string | undefined;
  let productData;

  if (product) {
    productData = product;
    type = product.type;
  }

  return (
    <div>
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
        <ProductDetails productData={productData} />

        {/* similarProducts */}
        <div className="mt-5 mb-12">
          <span className="mb-8 block w-fit text-lg font-medium border-b-2 pb-2 border-orange-500">
            کالاهای مشابه
          </span>
          <SimilarProductPagination type={type} />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
