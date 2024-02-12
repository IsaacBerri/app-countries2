import React, { useContext, useState } from "react";
import { ContextGetCountryDB } from "../context/ContextGetCountryDB";

const HeaderHome = () => {
  const [active, setActive] = useState(false);
  const { setFilter, setCodeContinent } = useContext(ContextGetCountryDB);

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="headerHome">
        <section className="sectionSearch">
          <h1>Countries</h1>
          <input
            type="text"
            placeholder="Write the country you want to see"
            onChange={handleSearch}
          />
        </section>
        <button className="btnSearch" onClick={handleActive}>
          🔍 <span>Search</span>
        </button>

        {active && (
          <aside className="filterContainer">
            <div className="filterHeader">
              <h3>Filter by continent</h3>
              <h3 className="clear" onClick={() => setCodeContinent("All")}>Clear</h3>
            </div>
            <div className="filterBody">
              <article className="filterItem" onClick={() => setCodeContinent("EU")}>
                <img src="https://i.postimg.cc/LscTrZzX/Europe.png" alt="europe" />
                <h4>Europe</h4>
              </article>
              <article className="filterItem" onClick={() => setCodeContinent("SA")}>
                <img src="https://i.postimg.cc/SxKD84Sy/South-America.png" alt="south america" />
                <h4>South America</h4>
              </article>
              <article className="filterItem" onClick={() => setCodeContinent("NA")}>
                <img src="https://i.postimg.cc/L6Dxn5MC/North-America.png" alt="north america" />
                <h4>Nort America</h4>
              </article>
              <article className="filterItem" onClick={() => setCodeContinent("AS")}>
                <img src="https://i.postimg.cc/jjwcghnm/Asia.png" alt="asia" />
                <h4>Asia</h4>
              </article>
              <article className="filterItem" onClick={() => setCodeContinent("OC")}>
                <img src="https://i.postimg.cc/VkH4WhvX/Oceania.png" alt="oceania" />
                <h4>Ociania</h4>
              </article>
              <article className="filterItem" onClick={() => setCodeContinent("AF")}>
                <img src="https://i.postimg.cc/XqcQK7Bv/Africa.png" alt="africa" />
                <h4>Africa</h4>
              </article>
            </div>
          </aside>
        )}
      </header>
    </>
  );
};

export default HeaderHome;
