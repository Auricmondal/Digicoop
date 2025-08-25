import React from "react";

const FloatingLabelInput = ({ id, name, type, placeholder, value, onChange, required }) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}

        className="block pb-2 w-full text-gray-800 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=""
      />
      <label
        htmlFor={id}

        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingLabelInput;