"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { productsData } from "@/helpers/Datas";
import ProductItemForSimilarProduct from "./ProductItemForSimilarProduct";
interface SimilarProductPaginationInterfaceProps {
  type: string | undefined;
}

const SimilarProductPagination: React.FC<
  SimilarProductPaginationInterfaceProps
> = ({ type }) => {
  const filterDataForSimilarProduct = (type: any) => {
    return productsData.filter((product) => product.type === type);
  };
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={6}
        navigation
        className="mySwiper"
      >
        {filterDataForSimilarProduct(type).map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItemForSimilarProduct key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SimilarProductPagination;
