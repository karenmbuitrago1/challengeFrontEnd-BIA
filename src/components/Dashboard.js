import React, { useEffect, useState } from "react";
import axios from "axios";
import CountrySearch from "./CountrySearch";

const FlagsDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get("/api/countries")
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
    setSearchCountry(searchCountry); // Actualiza el término de búsqueda en el estado
  };

  return (
    <div className="flags">
      <CountrySearch onSearch={handleSearch} />
      <ul className="flags__dashboard">
        {filteredCountries.map((country, index) => (
          <li className="flags__country" key={index}>
            <div className="country__article">
              <figure className="country__article-figure">
                <img
                  className="country__article-img"
                  src={country.flags.png}
                  alt=""
                />
              </figure>
              <div className="country__article__body article__body">
                <h2 className="article__heading">{country.name.common}</h2>
                <div className="article__text">
                  <p className="article__data-item">
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p className="article__data-item">
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p className="article__data-item">
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlagsDashboard;
