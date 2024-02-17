import React, { useContext } from 'react'
import '../styles/ManageCountry.css'
import HeaderInput from '../components/HeaderInput'
import { ContextGetCountryDB } from '../context/ContextGetCountryDB';
import InputsFile from '../components/InputsFile';
import Buttons from '../components/Buttons';

const ManageCountry = () => {
  const { country } = useContext(ContextGetCountryDB);

  return (
    <main className="manageCountry">
      <h1>Manage Country</h1>
      <HeaderInput setType={"DB"}/>
      <InputsFile country={country} typeRender={"manage"}/>
      <Buttons country={country} typeRender={"manage"}/>
    </main>
  )
}

export default ManageCountry