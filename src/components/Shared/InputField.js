import React from "react";

const InputField = (props) => {
  const { value, onChange, label } = props;

  return (
    <div>
      {label === "Zip" ? (
        ""
      ) : (
        <label className="block text-secondary text-sm mb-2" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        type="text"
        placeholder={label}
      />
    </div>
  );
};

InputField.defaultProps = {
  label: "email",
};

export default InputField;
