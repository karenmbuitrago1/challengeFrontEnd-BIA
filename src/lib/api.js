import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const getAllCountries = async () => {
    try {
      const response = await api.get("all");
      return response.data;
    } catch (error) {
      if (error.response) {
        // Error 404
        throw new Error(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        throw new Error("Error: No se pudo conectar al servidor de la API");
      } else {
        throw new Error("Error desconocido al obtener datos de la API");
      }
    }
  };