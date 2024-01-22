"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputWithOptions from "@/components/modules/contactUsModules/InputWithOptions";
import { ContactUsFormValuesInterface } from "@/helpers/conteracts";
import { MdOutlineStar } from "react-icons/md";
import TextInputComponent from "@/components/modules/shared/form/TextInputComponent";
import { notifySuccessSendMessage } from "@/helpers/functions";

const contactUsSchema: Yup.Schema<ContactUsFormValuesInterface> = Yup.object({
  subject: Yup.string().required("لطفاً موضوع را انتخاب کنید"),
  fullName: Yup.string().required("لطفاً نام و نام خانوادگی خود را وارد کنید"),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("لطفاً آدرس ایمیل خود را وارد کنید"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "فقط عدد مجاز است")
    .required("لطفاً شماره تلفن خود را وارد کنید")
    .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست"),
  orderNumber: Yup.string(),
  message: Yup.string().required("لطفاً متن پیام خود را وارد کنید"),
}).defined() as any;

const ContactUsForm: React.FC = () => {
  const initialValues: ContactUsFormValuesInterface = {
    subject: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    orderNumber: "", 
    message: "",
  };

  const handleSubmit = (
    values: ContactUsFormValuesInterface,
    { resetForm }: FormikHelpers<ContactUsFormValuesInterface>
  ) => {
    console.log(values);
    notifySuccessSendMessage();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
            <InputWithOptions
              setSearchTerm={(value) => setFieldValue("subject", value)}
            />
            <TextInputComponent
              name="fullName"
              text="نام و نام خانوادگی"
              required={true}
            />
            <TextInputComponent name="email" text="ایمیل" required={true} />
            <TextInputComponent
              name="phoneNumber"
              text="شماره تلفن"
              required={true}
            />
            <TextInputComponent
              name="orderNumber"
              text="شماره سفارش"
              required={false}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 flex" htmlFor="message">
              <span>متن پیام</span>
              <MdOutlineStar size={10} className="text-red-600" />
            </label>
            <div className=" border-2 border-slate-200 bg-white">
              <Field
                name="message"
                as="textarea"
                rows={4}
                className="w-full max-h-28 resize-none border-none bg-white focus:ring-0 focus:border-0"
              />
            </div>
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-fit"
            >
              ارسال
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
