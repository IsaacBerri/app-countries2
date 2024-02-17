import React, { useContext } from "react";
import { ContextRenderCountryInfo } from "../context/ContextRenderCountryInfo";

const CountryCard = ({ country }) => {

  const { setRender, setCountry } = useContext(ContextRenderCountryInfo);

  return (
    <article className="countryCard" onClick={() => {setRender(true), setCountry(country)}}>
      <img
        className="countryImg"
        src="https://media.istockphoto.com/id/802893644/es/foto/vista-a%C3%A9rea-del-centro-de-la-ciudad-de-miami-florida.jpg?s=612x612&w=0&k=20&c=sqJ68Fq3DusnWI-4o4R_x7Xx5vW0lRwhSbni87G9NCg="
        alt=""
      />
      <div className="countryInfo">
        <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="" />
        <div className="countryText">
          <h3>{country?.name}</h3>
          <p>{country?.continent?.name}</p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
