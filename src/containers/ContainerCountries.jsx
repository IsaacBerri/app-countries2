import React, { useContext, useEffect } from "react";
import CountryCard from "../components/CountryCard.jsx";
import Pagination from "../components/Pagination.jsx";
import { usePagination } from "../hooks/usePagination.jsx";
import { ContextRenderCountryInfo } from "../context/ContextRenderCountryInfo.jsx";
import { ContextGetCountriesDB } from "../context/ContextGetCountriesDB.jsx";
import RenderCountryInfo from "../components/RenderCountryInfo.jsx";

const ContainerCountries = () => {
  const { countries, update, setUpdate } = useContext(ContextGetCountriesDB);
  const { render } = useContext(ContextRenderCountryInfo);
  useEffect(() => {
    setUpdate(!update);
  }, [])
  const {
    currentCountries,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastCountry,
  } = usePagination(countries, 9);;

  return (
    <>
      <section className="containerCountries">
        {currentCountries.map((country) => (
          <CountryCard key={country.code} country={country}/>
        ))}
      </section>
      {render && <RenderCountryInfo/>}
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
