"use client";
import DesktopNavbar from "@/components/modules/homePageModules/DesktopNavbar";
import NavFilters from "@/components/modules/homePageModules/NavFilters";
import Products from "@/components/modules/homePageModules/Products";
import { useEffect } from "react";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { setShoppCartStateFromLocalStorage } from "@/ReduxToolkit/features/shoppingCartSlice";
import { notifySuccessLogin } from "@/helpers/functions";
import { useSearchParams } from "next/navigation";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success");

  useEffect(() => {
    if (isSuccess) {
      notifySuccessLogin();
    }
  }, [isSuccess]);

  useEffect(() => {
    let shoppCartState = localStorage.getItem("shoppCartState");
    if (shoppCartState) {
      shoppCartState = JSON.parse(shoppCartState);
    }

    dispatch(setShoppCartStateFromLocalStorage(shoppCartState));
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default HomePage;
