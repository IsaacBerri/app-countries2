import { createContext, useEffect, useState } from "react";

export const ContextGetCountryDB = createContext();

export function ProviderGetCountryDB ({ children }){
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [codeContinent, setCodeContinent] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if(codeContinent === "All") {
      fetch("http://localhost:3001/countries")
        .then((response) => response.json())
        .then((data) => setCountries(data));
    } else {
      fetch(`http://localhost:3001/countries/continent/${codeContinent}`)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }
  }, [codeContinent]);


  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [filter, countries]);

  return (
    <ContextGetCountryDB.Provider
      value={{
        countries: filteredCountries,
        setFilter,
        setCodeContinent,
      }}
    >
      {children}
    </ContextGetCountryDB.Provider>
  );
};
