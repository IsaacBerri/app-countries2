import React from "react";
import { usePostCountryBD } from "../hooks/usePostCountryBD";
import { useDeleteCountryDB } from "../hooks/useDeleteCountryDB";

const Buttons = ({ country, handleResetCountry, typeRender }) => {
  const { handlePostCountry } = usePostCountryBD();
  const { handleDeleteCountry } = useDeleteCountryDB();

  return (
    <div className="buttons">
      <button
        className="btnSearch btn1"
        onClick={
          typeRender === "create"
            ? handleResetCountry
            : () => handleDeleteCountry(country)
        }
      >
        {typeRender === "create" ? "Reset" : "Delete"}
      </button>
      <button
        className="btnSearch btn2"
        onClick={() => handlePostCountry(country)}
      >
        {typeRender === "create" ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default Buttons;
