import Login from "@/components/modules/loginModules/Login";
import { NextPage } from "next";
import { ToastContainer } from "react-toastify";

const LoginPage: NextPage = () => {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default LoginPage;
