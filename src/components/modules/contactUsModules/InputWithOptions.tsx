"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineStar } from "react-icons/md";
import OptionListForSubjectInput from "./OptionListForSubjectInput";
import { ErrorMessage, Field } from "formik";

const InputWithOptions: React.FC = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOptionSelect = (value: string) => {
    setIsOptionsVisible(false);
    setSearchTerm(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (inputRef.current && !inputRef.current.contains(target)) {
      setIsOptionsVisible(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOptionsVisible(true);
  };

  const handleDropdownButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsOptionsVisible(!isOptionsVisible);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = [
    "پیشنهاد",
    "انتقاد یا شکایت",
    "پیگیری سفارش",
    "خدمات پس از فروش",
    "استعلام گارانتی",
    "سایر موضوعات",
  ];

  return (
    <div className="flex flex-col">
      <label className="mb-2 flex" htmlFor="subject">
        <span>موضوع</span>
        <MdOutlineStar size={10} className="text-red-600" />
      </label>
      <div className="flex flex-col gap-y-2 bg-stone-100 relative">
        <div className="flex items-center justify-between border-2 border-slate-200 bg-white pl-2">
          <Field
            name="subject"
            type="text"
            className="border-none bg-white focus:ring-0 focus:border-0"
            onFocus={() => setIsOptionsVisible(true)}
            ref={inputRef}
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="bg-white" onClick={handleDropdownButtonClick}>
            <MdKeyboardArrowDown size={25} />
          </button>
        </div>
        {isOptionsVisible && (
          <OptionListForSubjectInput
            onSelect={handleOptionSelect}
            options={options}
            searchTerm={searchTerm}
          />
        )}
      </div>
      <ErrorMessage name="subject" component="div" className="text-red-500" />
    </div>
  );
};

export default InputWithOptions;
