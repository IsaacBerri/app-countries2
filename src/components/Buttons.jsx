import React, { useEffect } from "react";
import { usePostCountryBD } from "../hooks/usePostCountryBD.jsx";
import { useDeleteCountryDB } from "../hooks/useDeleteCountryDB.jsx";
import useUpdateCountryDB from "../hooks/useUpdateCountryDB.jsx";

const Buttons = ({
  country,
  handleResetCountry,
  typeRender,
  handleResetCountryDB,
}) => {
  const { handlePostCountry } = usePostCountryBD();
  const { handleDeleteCountry } = useDeleteCountryDB();
  const { handleUpdateCountry } = useUpdateCountryDB();

  return (
    <div className="buttons">
      <button
        className="btnSearch btn1"
        onClick={
          typeRender === "create"
            ? handleResetCountry
            : () => {
                handleDeleteCountry(country), handleResetCountryDB();
              }
        }
      >
        {typeRender === "create" ? "Reset" : "Delete"}
      </button>
      <button
        className="btnSearch btn2"
        onClick={
          typeRender === "create"
            ? () => handlePostCountry(country)
            : () => {
                handleUpdateCountry(country), handleResetCountryDB();
              }
        }
      >
        {typeRender === "create" ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default Buttons;
