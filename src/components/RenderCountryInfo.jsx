import React, { useContext } from "react";
import { ContextRenderCountryInfo } from "../context/ContextRenderCountryInfo";

const RenderCountryInfo = () => {
  const { country, setRender } = useContext(ContextRenderCountryInfo);

  return (
    <aside className="renderCountryInfo">
      <div className="close">
        <span onClick={() => setRender(false)}>X</span>
      </div>
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
      <div className="countryInfo2">
        <h3 className="h3Info"><span>Capital:</span> {country?.capital}</h3>
        <h3 className="h3Info">
          <span>Languages:</span> {country?.languages?.[0]?.name}
        </h3>
        <h3 className="h3Info"><span>Currency:</span> {country?.currency}</h3>
        <h3 className="h3Info"><span>Native:</span> {country?.native}</h3>
        <h3 className="h3Info"><span>Phone:</span> +{country?.phone}</h3>
      </div>
      <div className="countryInfo3">
        <h3 className="h3Info"><span>States:</span></h3>
        <div className="states">
       {country?.states?.map((state) => <p>{state.name}</p>)}
        </div>
      </div>
    </aside>
  );
};

export default RenderCountryInfo;
