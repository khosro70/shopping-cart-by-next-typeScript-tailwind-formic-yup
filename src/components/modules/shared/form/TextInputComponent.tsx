import { ErrorMessage, Field } from "formik";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

interface textInputInterfaceProps {
  name: string;
  text: string;
  required: boolean;
}

const TextInputComponent: React.FC<textInputInterfaceProps> = ({
  name,
  text,
  required,
}) => {
  return (
    <div className="flex flex-col">
      {required ? (
        <label className="mb-2 flex" htmlFor={name}>
          <span>{text}</span>
          <MdOutlineStar size={10} className="text-red-600" />
        </label>
      ) : (
        <label className="mb-2" htmlFor={name}>
          <span>{text}</span>
        </label>
      )}
      <div className=" border-2 border-slate-200">
        <Field
          name={name}
          type="text"
          className="border-none bg-white focus:ring-0 focus:border-0 w-full"
        />
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
};

export default TextInputComponent;
