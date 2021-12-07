import axios from "axios";
import { useState } from "react";
import { API_KEY } from "../config";

const BASE_URL = "https://api.openweathermap.org";

const useForecast = () => {
  const [forecast, setForecast] = useState("");
  const [error, setError] = useState(false);

  //get coordinates from city name
  const getCoordinates = async (cityName) => {
    const city = await axios(`${BASE_URL}/geo/1.0/direct`, {
      params: { q: cityName, appid: API_KEY },
    });

    return {
      city,
    };
  };

  //get forecst with coordinates
  const getForecast = async (lat, lon) => {
    const data = await axios(`${BASE_URL}/data/2.5/onecall`, {
      params: {
        lat: lat,
        lon: lon,
        exclude: "minutely",
        appid: API_KEY,
      },
    });
    return data;
  };

  const submitRequest = async (location) => {
    setError(false);
    setForecast("");
    if (location.length < 3) {
      setError("Sorry we couldn't find a location named: " + location);
      return;
    }
    const { city } = await getCoordinates(location);
    if (city.data.length === 0) {
      setError("Sorry we couldn't find a location named: " + location);
      return;
    }
    const lat = city.data[0].lat;
    const lon = city.data[0].lon;
    const data = await getForecast(lat, lon);
    setForecast(data);
  };

  return {
    submitRequest,
    forecast,
    error,
  };
};

export default useForecast;
