import React, { useContext, useState } from "react";
import { ContextGetCountryAPI } from "../context/ContextGetCountryAPI";
import { ContextGetCountryDB } from "../context/ContextGetCountryDB";

const HeaderInput = ({ setType }) => {
  const [inputValue, setInputValue] = useState("");
  const { setCode } = useContext(ContextGetCountryAPI);
  const { handleConsult } = useContext(ContextGetCountryDB);

  const handleClick = () => {
    if (setType === "DB") {
      handleConsult(inputValue.toUpperCase());
    } else if (setType === "API") {
      setCode(inputValue.toUpperCase());
    }
  };

  return (
    <header className="headerInput">
      <label htmlFor="codeCountry">Country code</label>
      <input
        id="codeCountry"
        type="text"
        maxLength={2}
        onBlur={(e) => setInputValue(e.target.value)}
      />
      <button className="btnSearch" onClick={handleClick}>
        Consult
      </button>
    </header>
  );
};

export default HeaderInput;
