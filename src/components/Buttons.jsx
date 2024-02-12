import React from "react";
import { usePostCountryBD } from "../hooks/usePostCountryBD";

const Buttons = ({ country, handleResetCountry }) => {
  const { handlePostCountry } = usePostCountryBD();

  return (
    <div className="buttons">
      <button className="btnSearch btn1" onClick={handleResetCountry}>
        Reset
      </button>
      <button
        className="btnSearch btn2"
        onClick={() => handlePostCountry(country)}
      >
        Add
      </button>
    </div>
  );
};

export default Buttons;
