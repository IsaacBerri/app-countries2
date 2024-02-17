import React from 'react'

const InputsFile = ({country, typeRender}) => {

  if (typeRender === 'create') {
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
  }else if (typeRender === 'manage') {
    return (
      <section className="inputsFile">
          <div className='inputs'>
              <label htmlFor="codeCountry">Code</label>
              <input id='codeCountry' type="text" defaultValue={country.error ? '' : country.code} />
              <label htmlFor="nameCountry">Name</label>
              <input id='nameCountry' type="text" defaultValue={country.error ? '' : country.name} />
          </div>
          <div className='inputs'>
              <label htmlFor="capitalCountry">Capital</label>
              <input id='capitalCountry' type="text" defaultValue={country.error ? '' : country.capital} />
              <label htmlFor="continentCountry">Continent</label>
              <input id='continentCountry' type="text" defaultValue={country.error ? '' : country.continent?.name} />
          </div>
          <div className='inputs'>
              <label htmlFor="languageCountry">Language</label>
              <input id='languageCountry' type="text" defaultValue={country.error ? '' : country.languages?.[0]?.name} />
              <label htmlFor="currencyCountry">Currency</label>
              <input id='currencyCountry' type="text" defaultValue={country.error ? '' : country.currency} />
          </div>
      </section>
    )
  }
}

export default InputsFile