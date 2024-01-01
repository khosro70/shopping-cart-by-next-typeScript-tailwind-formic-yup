import Header from "@/components/modules/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="h-[4200px] container mx-auto 2xl:max-w-screen-2xl px-4">
        {/* نوار حرکت تیترهای مهم به صورت انیمیشن */}
        <div className="grid grid-cols-16 h-56 gap-4">
          <div className="hidden lg:block bg-yellow-600 col-span-3 col-start-1 col-end-4 rounded"></div>
          <div className="col-span-16 lg:col-span-13 lg:col-start-4">
            <div className="bg-red-600 h-[50px] mb-4 rounded"></div>
            <div className="bg-green-500 h-52 rounded"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
