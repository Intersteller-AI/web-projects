/* eslint-disable react/prop-types */
// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React from "react";

const Input = ({ label, type="text", className, disabled=false, value, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <label className={`${className} leading-tight font-semibold capitalize`}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        id=""
        type={type}
        name={String(label).toLowerCase()}
        className={`p-4 font-normal ${className} bg-white border-gray-300 focus-within:border-blue-500 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed`}
      />
    </div>
  );
};

export default Input;
