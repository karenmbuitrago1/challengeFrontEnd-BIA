import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllCountries } from "../lib/api";
import CountrySearch from "./CountrySearch";
import RegionFilter from "./RegionFilter";

const FlagsDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Actualiza el término de búsqueda
  };

  // Función para manejar la selección de la región
  const handleSelectRegion = (region) => {
    setSelectedRegion(region); // Actualiza la región seleccionada
  };

  // Combina los filtros de búsqueda y región
  const filteredCountriesByRegion = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  // Aplica el filtro de búsqueda
  const filteredCountriesSearch = filteredCountriesByRegion.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flags" data-testid="dashboard" >
      <div className="flag__filters">
        <CountrySearch onSearch={handleSearch} />
        <RegionFilter
          regions={getUniqueRegions(countries)}
          onSelectRegion={handleSelectRegion} // Pasa la función de manejo de selección de región
        />
      </div>
      <ul className="flags__dashboard" data-testid="country-list">
        {filteredCountriesSearch.map((country, index) => (
          <li className="flags__country" key={index}>
            <Link href={`/countries/${country.name.common}`}>
              <div className="country__article">
                <figure className="country__article-figure">
                  <img
                    className="country__article-img"
                    src={country.flags.svg}
                    alt={country.name.common}
                    loading="lazy"
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

