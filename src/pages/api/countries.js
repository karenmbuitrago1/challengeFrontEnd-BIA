// pages/api/countries.js

import axios from "axios";

export default async (req, res) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
