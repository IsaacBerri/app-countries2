import { toast } from "react-toastify";
import { createContext, useState } from "react";

export const ContextGetCountryDB = createContext();

export const ProviderGetCountryDB = ({ children }) => {
  const [country, setCountry] = useState({});

  function handleResetCountryDB() {
    setCountry({});
  }

  function handleConsult(codeCountry) {
    fetch(`http://localhost:3001/countries/country/${codeCountry}`)
      .then((response) => {
        if (!response.ok) {
          toast.error("The country is not found in the database");
        }
        return response.json();
      })
      .then((data) => setCountry(data));
  }

  return (
    <ContextGetCountryDB.Provider
      value={{
        country,
        handleConsult,
        handleResetCountryDB,
      }}
    >
      {children}
    </ContextGetCountryDB.Provider>
  );
};
