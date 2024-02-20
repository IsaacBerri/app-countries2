import React, { useContext } from 'react'
import '../styles/ManageCountry.css'
import HeaderInput from '../components/HeaderInput.jsx'
import { ContextGetCountryDB } from '../context/ContextGetCountryDB.jsx';
import InputsFile from '../components/InputsFile.jsx';
import Buttons from '../components/Buttons.jsx';

const ManageCountry = () => {
  const { country, handleResetCountryDB } = useContext(ContextGetCountryDB);

  return (
    <main className="manageCountry">
      <h1>Manage Country</h1>
      <HeaderInput setType={"DB"}/>
      <InputsFile country={country} typeRender={"manage"}/>
      <Buttons country={country} typeRender={"manage"} handleResetCountryDB={handleResetCountryDB}/>
    </main>
  )
}

export default ManageCountry