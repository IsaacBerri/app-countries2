import React from "react";
import useUpdateCountryDB from "../hooks/useUpdateCountryDB.jsx";

const InputsFile = ({ country, typeRender }) => {
  const { setNewCountry } = useUpdateCountryDB();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewCountry({
      code: name === "code" ? value : country.code,
      name: name === "name" ? value : country.name,
      capital: name === "capital" ? value : country.capital,
      continent: {
        code: country.continent?.code,
        name: name === "continent" ? value : country.continent?.name,
      },
      currency: name === "currency" ? value : country.currency,
      native: country.native,
      phone: country.phone,
      languages: [
        {
          name: name === "languages" ? value : country.languages?.[0]?.name,
        },
      ],
      states: [
        {
          name: country.states?.[0]?.name,
        },
      ],
    });
  };

  if (typeRender === "create") {
    return (
      <section className="inputsFile">
        <div className="inputs">
          <label htmlFor="codeCountry">Code</label>
          <input
            id="codeCountry"
            type="text"
            value={country === null ? "" : country.code}
            disabled
          />
          <label htmlFor="nameCountry">Name</label>
          <input
            id="nameCountry"
            type="text"
            value={country === null ? "" : country.name}
            disabled
          />
        </div>
        <div className="inputs">
          <label htmlFor="capitalCountry">Capital</label>
          <input
            id="capitalCountry"
            type="text"
            value={country === null ? "" : country.capital}
            disabled
          />
          <label htmlFor="continentCountry">Continent</label>
          <input
            id="continentCountry"
            type="text"
            value={country === null ? "" : country.continent?.name}
            disabled
          />
        </div>
      </section>
    );
  } else if (typeRender === "manage") {
    return (
      <section className="inputsFile">
        <div className="inputs">
          <label htmlFor="codeCountry">Code</label>
          <input
            name="code"
            id="codeCountry"
            type="text"
            defaultValue={country.error ? "" : country.code}
            onBlur={handleOnChange}
          />
          <label htmlFor="nameCountry">Name</label>
          <input
            name="name"
            id="nameCountry"
            type="text"
            defaultValue={country.error ? "" : country.name}
            onBlur={handleOnChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="capitalCountry">Capital</label>
          <input
            name="capital"
            id="capitalCountry"
            type="text"
            defaultValue={country.error ? "" : country.capital}
            onBlur={handleOnChange}
          />
          <label htmlFor="continentCountry">Continent</label>
          <input
            name="continent"
            id="continentCountry"
            type="text"
            defaultValue={country.error ? "" : country.continent?.name}
            onBlur={handleOnChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="languageCountry">Language</label>
          <input
            name="language"
            id="languageCountry"
            type="text"
            defaultValue={country.error ? "" : country.languages?.[0]?.name}
            onBlur={handleOnChange}
          />
          <label htmlFor="currencyCountry">Currency</label>
          <input
            name="currency"
            id="currencyCountry"
            type="text"
            defaultValue={country.error ? "" : country.currency}
            onBlur={handleOnChange}
          />
        </div>
      </section>
    );
  }
};

export default InputsFile;
