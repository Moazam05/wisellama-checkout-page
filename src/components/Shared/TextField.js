import React from "react";

const TextField = (props) => {
  const { value, onChange } = props;

  return (
    <div className="flex items-center border-b border-themeYellow py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight caret-themeYellow focus:outline-none"
        type="text"
        placeholder="E.g. I’d love to learn about your baking technique"
        aria-label="Ask Question"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
