"use client";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { makeStore } from "@/ReduxToolkit/store";
import Header from "@/components/modules/shared/Header";
import Footer from "@/components/modules/shared/Footer";
import { vazirMatn } from "@/helpers/vazirMatnFont";

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
