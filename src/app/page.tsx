import Header from "@/components/modules/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="h-[4200px] container mx-auto 2xl:max-w-screen-2xl">
      <Header />
    </main>
  );
};

export default Home;
