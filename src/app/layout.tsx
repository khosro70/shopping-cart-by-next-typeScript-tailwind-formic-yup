"use client";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { makeStore } from "@/ReduxToolkit/store";
import Header from "@/components/modules/shared/Header";
import Footer from "@/components/modules/shared/Footer";

const vazirMatn = localFont({
  src: [
    {
      path: "../../public/font/Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = makeStore();
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirMatn.className}>
        <StoreProvider store={store}>
          <Header />
          {children}
        </StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
