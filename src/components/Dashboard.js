import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllCountries } from "../lib/api";
import CountrySearch from "./CountrySearch";
import RegionFilter from "./RegionFilter";


const FlagsDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
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
    setSearchCountry(searchCountry);
  };

  // Función para manejar la selección de la región
  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
    if (region === "") {
      setFilteredCountries(countries);
    } else {
      const filteredByRegion = countries.filter((country) => country.region === region);
      setFilteredCountries(filteredByRegion);
    }
  };

  return (
    <div className="flags">
      <div className="flag__filters">
        <CountrySearch onSearch={handleSearch} />
        <RegionFilter
          regions={getUniqueRegions(countries)}
          onSelectRegion={handleSelectRegion} // Pasa la función de manejo de selección de región
        />
      </div>
      <ul className="flags__dashboard">
        {filteredCountries.map((country, index) => (
          <li className="flags__country" key={index}>
            <Link href={`/countries/${country.name.common}`}>
              <div className="country__article">
                <figure className="country__article-figure">
                  <img
                    className="country__article-img"
                    src={country.flags.svg}
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlagsDashboard;

// Función para obtener un arreglo de regiones únicas
function getUniqueRegions(countries) {
  const uniqueRegions = [...new Set(countries.map((country) => country.region))];
  return uniqueRegions;
}

