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

const SimilarProductPagination: React.FC = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={6}
        navigation
        className="mySwiper"
      >
        {productsData.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItemForSimilarProduct key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SimilarProductPagination;
