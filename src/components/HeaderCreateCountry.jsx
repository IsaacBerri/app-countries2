import React, { useContext, useState } from "react";
import { ContextGetCountryAPI } from "../context/ContextGetCountryAPI";

const HeaderCreateCountry = () => {
  const [ inputValue, setInputValue ] = useState("");
  const { setCode } = useContext(ContextGetCountryAPI);

  const handleClick = () => {
    setCode(inputValue.toUpperCase());
  };

  return (
    <header className="headerCreateCountry">
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

export default HeaderCreateCountry;
