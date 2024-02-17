import React, { useContext } from "react";
import "../styles/CreateCountry.css";
import InputsFile from "../components/InputsFile.jsx";
import Buttons from "../components/Buttons.jsx";
import { ContextGetCountryAPI } from "../context/ContextGetCountryAPI.jsx";
import HeaderInput from './../components/HeaderInput';

const CreateCountry = () => {
  const { country, handleResetCountry } = useContext(ContextGetCountryAPI);

  return (
    <main className="createCountry">
      <h1>Create Country</h1>
      <HeaderInput setType={"API"}/>
      <InputsFile country={country} typeRender={"create"}/>
      <Buttons country={country} handleResetCountry={handleResetCountry} typeRender={"create"}/>
    </main>
  );
};

export default CreateCountry;
