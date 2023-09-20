import React, { useEffect, useState } from "react";
import axios from "axios"; // Agrega esta línea de importación

const FlagsDashboard = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("/api/countries") // Ruta a la API creada en pages/api
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(countries, "hola")

  return (
    <ul className="list__countries">
      {countries.map((country, index) => (
        <li className="country" key={index}>
          <div className="article-wrapper">
            <figure>
              <img src={country.flags.png} alt="" />
            </figure>
            <div className="article-body">
              <h2>{country.name.common}</h2>
              <p> Population:{country.population} </p>
              <p> Region:{country.region} </p>
              <p> Capital:{country.capital} </p>
            </div>
          </div>
        </li>
      )
      )}
    </ul>
  );
};

export default FlagsDashboard;
