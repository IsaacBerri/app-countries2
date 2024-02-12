import React from 'react'

const InputsFile = ({country}) => {

  return (
    <section className="inputsFile">
        <div className='inputs'>
            <label htmlFor="codeCountry">Code</label>
            <input id='codeCountry' type="text" value={country === null ? '' : country.code} disabled/>
            <label htmlFor="nameCountry">Name</label>
            <input id='nameCountry' type="text" value={country === null ? '' : country.name} disabled/>
        </div>
        <div className='inputs'>
            <label htmlFor="capitalCountry">Capital</label>
            <input id='capitalCountry' type="text" value={country   === null ? '' : country.capital} disabled/>
            <label htmlFor="continentCountry">Continent</label>
            <input id='continentCountry' type="text" value={country === null ? '' : country.continent?.name} disabled/>
        </div>
    </section>
  )
}

export default InputsFile