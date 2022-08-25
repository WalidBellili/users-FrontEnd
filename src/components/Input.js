import React from "react";

const Input = ({ label, value, type, placeholder, className, id, htmlFor }) => {
  return (
    <div>
      <label htmlFor={htmlFor} id={id}>
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder} value={value} />
      {/* <label htmlFor={htmlFor} id={id}>
        Email
      </label>
      <input type={type} id={id} placeholder={placeholder} value={value} />
      <label htmlFor={htmlFor} id={id}>
        Password
      </label>
      <input type={type} id={id} placeholder={placeholder} value={value} />
      <label htmlFor={htmlFor} id={id}>
        Picture
      </label>
      <input type={type} id={id} placeholder={placeholder} value={value} /> */}
    </div>
  );
};

export default Input;
