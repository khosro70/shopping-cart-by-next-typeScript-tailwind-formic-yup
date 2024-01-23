"use client";
import Header from "@/components/modules/shared/Header";
import { NextPage } from "next";

import Footer from "@/components/modules/shared/Footer";
import ContactUsForm from "@/components/templates/contactus/ContactUsForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "@/ReduxToolkit/hooks";
import { useEffect } from "react";
import { setShoppCartStateFromLocalStorage } from "@/ReduxToolkit/features/shoppingCartSlice";

const ContactUsPage: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let shoppCartState = localStorage.getItem("shoppCartState");
    if (shoppCartState) {
      shoppCartState = JSON.parse(shoppCartState);
    }

    dispatch(setShoppCartStateFromLocalStorage(shoppCartState));
  }, []);
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-28 px-4 min-h-[100vh] border-2 border-slate-100">
        <div className="flex flex-col max-w-5xl mx-auto">
          <span className="font-medium border-b-[3px] pb-4 mb-3 w-fit border-orange-500">
            تماس با دیجی تایز
          </span>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between items-center border-b-2 border-slate-200 pb-4 mb-4">
            <span className="text-sm">
              لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتداپرسش‌‌های متداول را
              مشاهده کنید.
            </span>
            <button className="p-2 rounded-xl text-sm md:text-md text-blue-600 border-2 border-blue-600 bg-slate-50">
              پرسش های متداول
            </button>
          </div>
          <ContactUsForm />
          <span className="font-medium text-lg border-b-[3px] pb-4 mt-6 w-fit border-orange-500 mb-10">
            اطلاعات دیجی تایز
          </span>
          <div className="flex flex-col gap-y-1 opacity-80 mb-5">
            <span className="text-lg font-medium">دفتر مرکزی</span>
            <span className="text-sm">
              استان تهران شهر تهران - سعادت آباد - نبش خیابان ۲۱ - پلاک ۲۸
            </span>
          </div>
          <div className="flex flex-col gap-y-1 opacity-80 mb-12">
            <span className="text-lg font-medium">خدمات پس از فروش</span>
            <span className="text-sm">
              لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش دیجی
              تایز از طریق پست، تنها به صندوق پستی 3469-15275 ارسال کنید.(شما
              می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی کالا کنید)
            </span>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default ContactUsPage;
