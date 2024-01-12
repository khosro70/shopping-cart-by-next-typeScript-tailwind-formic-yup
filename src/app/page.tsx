"use client";
import DesktopNavbar from "@/components/modules/homePageModules/DesktopNavbar";
import Header from "@/components/modules/shared/Header";
import NavFilters from "@/components/modules/homePageModules/NavFilters";
import Products from "@/components/modules/homePageModules/Products";
import { makeStore } from "@/ReduxToolkit/store";

import { NextPage } from "next";

import StoreProvider from "./StoreProvider";

const Home: NextPage = () => {
  const store = makeStore();
  return (
    <div>
      <StoreProvider store={store}>
        <Header />
        <main className="h-fit container mx-auto 2xl:max-w-screen-2xl px-4 mt-28">
          {/* نوار حرکت تیترهای مهم به صورت انیمیشن */}
          <div className="grid h-56 gap-4">
            <DesktopNavbar />
            <div className="lg:mr-[225px]">
              {/* nav filter */}
              <NavFilters />
              {/* Products */}
              <Products />
            </div>
          </div>
          {/* فوتر */}
        </main>
      </StoreProvider>
    </div>
  );
};

export default Home;
