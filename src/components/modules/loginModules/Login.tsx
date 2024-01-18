"use client";
import { DigitaizIcon } from "@/helpers/Icons";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccessLogin } from "@/helpers/functions";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("لطفاً یک شماره موبایل یا ایمیل وارد کنید.")
    .matches(
      /^(09\d{9})$|^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "لطفاً یک شماره موبایل یا ایمیل معتبر وارد کنید."
    ),
});

const Login: React.FC = () => {
  const router = useRouter();
  

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const isValid = await formik.validateForm();

      if (isValid) {
        console.log(values);
        notifySuccessLogin();
        router.push("/");
      }
      
    },
  });
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-gray-50 flex flex-col items-center border border-slate-300 p-4 pb-7 sm:min-w-80">
        <Link href="/" className="ml-4 mb-5">
          <DigitaizIcon />
        </Link>
        <div className="text-xl flex justify-start items-start mb-10 w-full font-medium">
          <span>ورود | ثبت نام</span>
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <p className="text-sm opacity-80 text-right w-full">
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </p>
          <input
            type="text"
            id="username"
            name="username"
            className={`w-full mt-4 rounded border-orange-400 focus:outline-none ${
              formik.touched.username && formik.errors.username
                ? "border-red-500"
                : "focus:border-[1px] focus:border-blue-400 focus:ring-0"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-sm">{formik.errors.username}</div>
          ) : null}
          <button
            type="submit"
            className="w-full bg-red-600 text-slate-50 p-2 mt-8 rounded"
          >
            ورود
          </button>
        </form>
        <div className="flex text-xs mt-5">
          ورود شما به معنای پذیرش
          <span className="text-blue-500 cursor-pointer">شرایط دیجی‌ تایز</span>
          و
          <span className="text-blue-500 cursor-pointer">
            قوانین حریم‌ خصوصی
          </span>
          است
        </div>
      </div>
      
    </div>
  );
};

export default Login;
