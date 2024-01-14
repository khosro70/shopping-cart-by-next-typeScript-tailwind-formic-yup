"use client";
import DesktopNavbar from "@/components/modules/homePageModules/DesktopNavbar";
import Header from "@/components/modules/shared/Header";
import NavFilters from "@/components/modules/homePageModules/NavFilters";
import Products from "@/components/modules/homePageModules/Products";
import { makeStore } from "@/ReduxToolkit/store";

import { NextPage } from "next";

import StoreProvider from "./StoreProvider";
import HomePageFooter from "@/components/modules/homePageModules/HomePageFooter";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [navbarBottom, setNavbarBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const largeElement = document.querySelector(".large-element");
      const stickyInnerElement = document.querySelector(
        ".sticky-inner-element"
      );
      if (largeElement && stickyInnerElement) {
        const largeElementRect = largeElement.getBoundingClientRect();
        const stickyInnerElementRect =
          stickyInnerElement.getBoundingClientRect();
        setNavbarBottom(
          largeElementRect.bottom - stickyInnerElementRect.bottom
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const store = makeStore();
  return (
    <div>
      <StoreProvider store={store}>
        <Header />
        <main className="container mx-auto 2xl:max-w-screen-2xl px-4 mt-28 grid gap-4">
          {/* نوار حرکت تیترهای مهم به صورت انیمیشن */}
          <div className="h-fit lg:mr-[225px] large-element">
            <NavFilters />
            <Products />
          </div>
          <div
            className={`sticky-inner-element fixed hidden lg:block bg-gray-50 rounded py-5 px-4 overflow-auto desktopFilter h-fit lg:w-52 ${
              navbarBottom < 0
                ? `bottom-[${Math.floor(Math.abs(navbarBottom))}px] `
                : ""
            }`}
            id="NavBarId"
          >
            <DesktopNavbar />
          </div>
        </main>
      </StoreProvider>
      <footer
        className="bg-slate-500 h-56 w-full mt-8 relative z-50"
        id="footerId fixed bottom-0"
      >
        <HomePageFooter />
      </footer>
    </div>
  );
};

export default Home;
