"use client";
import DesktopNavbar from "@/components/modules/homePageModules/DesktopNavbar";
import Header from "@/components/modules/shared/Header";
import NavFilters from "@/components/modules/homePageModules/NavFilters";
import Products from "@/components/modules/homePageModules/Products";
import { makeStore } from "@/ReduxToolkit/store";

import { NextPage } from "next";

import StoreProvider from "./StoreProvider";
import Footer from "@/components/modules/shared/Footer";

const Home: NextPage = () => {
  const store = makeStore();
  return (
    <div>
      <StoreProvider store={store}>
        <Header />
        <main className="container mx-auto 2xl:max-w-screen-2xl px-4 mt-28 grid gap-4">
          {/* نوار حرکت تیترهای مهم به صورت انیمیشن */}
          <div className="h-fit flex gap-x-5">
            <div>
              <DesktopNavbar />
            </div>
            <div className="w-full">
              <NavFilters />
              <Products />
            </div>
          </div>
        </main>
      </StoreProvider>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
