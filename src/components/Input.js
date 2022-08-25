import React from "react";

const Input = ({
  label,
  value,
  type,
  placeholder,

  id,
  htmlFor,
  onChange,
}) => {
  return (
    <section>
      <div className="flex flex-col text-center">
        <label htmlFor={htmlFor} id={id} className="mb-3">
          {label}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-slate-200 rounded-full h-10 w-58 text-center"
        />
      </div>
    </section>
  );
};

export default Input;
