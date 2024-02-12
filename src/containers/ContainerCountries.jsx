import React, { useContext } from "react";
import CountryCard from "../components/CountryCard";
import { ContextGetCountryDB } from "../context/ContextGetCountryDB";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/Pagination";

const ContainerCountries = () => {
  const { countries } = useContext(ContextGetCountryDB);
  const {
    currentCountries,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastCountry,
  } = usePagination(countries, 9);


  return (
    <>
      <section className="containerCountries">
        {currentCountries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </section>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        indexOfLastCountry={indexOfLastCountry}
        countries={countries}
      />
    </>
  );
};

export default ContainerCountries;
