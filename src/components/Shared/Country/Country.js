import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./Country.css";

function Country(props) {
  const { value, onChange } = props;
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="country-wrap">
      <Select
        options={options}
        value={value}
        placeholder="Select Country..."
        onChange={onChange}
      />
    </div>
  );
}

export default Country;
