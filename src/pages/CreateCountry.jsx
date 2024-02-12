import React, { useContext } from "react";
import "../styles/CreateCountry.css";
import HeaderCreateCountry from "../components/HeaderCreateCountry.jsx";
import InputsFile from "../components/InputsFile.jsx";
import Buttons from "../components/Buttons.jsx";
import { ContextGetCountryAPI } from "../context/ContextGetCountryAPI.jsx";

const CreateCountry = () => {
  const { country, handleResetCountry } = useContext(ContextGetCountryAPI);

  return (
    <section className="createCountry">
      <h1>Create Country</h1>
      <HeaderCreateCountry />
      <InputsFile country={country}/>
      <Buttons country={country} handleResetCountry={handleResetCountry}/>
    </section>
  );
};

export default CreateCountry;
