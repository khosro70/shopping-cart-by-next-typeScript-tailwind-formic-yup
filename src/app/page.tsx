"use client";
import DesktopNavbar from "@/components/modules/homePageModules/DesktopNavbar";
import Header from "@/components/modules/shared/Header";
import NavFilters from "@/components/modules/homePageModules/NavFilters";
import Products from "@/components/modules/homePageModules/Products";

import { NextPage } from "next";

import Footer from "@/components/modules/shared/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { setShoppCartStateFromLocalStorage } from "@/ReduxToolkit/features/shoppingCartSlice";
import { setproductFilterStateFromLocalStorage } from "@/ReduxToolkit/features/productFilterSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let shoppCartState = localStorage.getItem("shoppCartState");
    if (shoppCartState) {
      shoppCartState = JSON.parse(shoppCartState);
    }
    let productFilterState = localStorage.getItem("productsState");
    if (productFilterState) {
      productFilterState = JSON.parse(productFilterState);
    }
    dispatch(setShoppCartStateFromLocalStorage(shoppCartState));
    dispatch(setproductFilterStateFromLocalStorage(productFilterState));
  }, []);
  return (
    <div>
      <Header />
      <main className="container mx-auto 2xl:max-w-screen-2xl px-4 mt-28 grid gap-4">
        <div className="h-fit flex gap-x-5">
          <div>
            <DesktopNavbar />
          </div>
          <div className="w-full">
            <NavFilters />
            <Products itemsPerPage={12} />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Home;
