import React from "react";
import "./GreenCheckbox.css";

const CustomCheckbox = (props) => {
  const { value, onChange } = props;

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="checkmark" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeMiterlimit={10}
            fill="none"
            d="M22.9 3.7l-15.2 16.6-6.6-7.1"
          ></path>
        </symbol>
      </svg>
      <div className="form-container">
        <div className="promoted-checkbox">
          <input
            id="tmp"
            type="checkbox"
            className="promoted-input-checkbox"
            defaultChecked={value}
            value={value}
            onChange={onChange}
          />
          <label htmlFor="tmp">
            <svg>
              <use xlinkHref="#checkmark" />
            </svg>
          </label>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomCheckbox;
