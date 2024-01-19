"use client";

import React, { useState } from "react";
import Product from "../shared/Product";
import { useAppSelector } from "@/ReduxToolkit/hooks";
import { productInterface } from "@/helpers/conteracts";
import ReactPaginate from "react-paginate";
import { englishNumbersToPersian } from "@/helpers/functions";
interface productsInterfaceProps {
  itemsPerPage: number;
}
const Products: React.FC<productsInterfaceProps> = ({ itemsPerPage }) => {
  const productFilter: productInterface[] = useAppSelector(
    (state) => state.productfilterInNavbar.productsFilter
  );
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productFilter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productFilter.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % productFilter.length;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setItemOffset(newOffset);
  };

  return (
    <>
      <div
        className={`rounded grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-[calc(100vh-200px)] ${
          currentItems.length === 0
            ? "flex justify-center items-center"
            : "grid"
        }`}
      >
        {currentItems.length > 0 ? (
          currentItems.map((item) => <Product key={item.id} data={item} />)
        ) : (
          <div>
            <span>محصولی متناسب با فیلترهای شما وجود ندارد</span>
          </div>
        )}
      </div>
      <ReactPaginate
        className="flex justify-center mt-5 gap-x-1"
        breakLabel="..."
        nextLabel="بعدی >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< قبلی"
        renderOnZeroPageCount={null}
        previousClassName="bg-gray-300 py-1 px-3 rounded"
        nextClassName="bg-gray-300 py-1 px-3 rounded"
        breakClassName="bg-gray-300 py-1 px-3 rounded"
        pageClassName="bg-gray-300 py-1 px-3 rounded"
        activeClassName="bg-gray-400"
        pageLabelBuilder={(page) => englishNumbersToPersian(page.toString())}
        disabledClassName="opacity-60"
      />
    </>
  );
};

export default Products;
