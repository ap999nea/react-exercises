import axios from "axios";
import type { Coords, Geocode, WeatherResponse } from "./models/weather.model";

const API_KEY = "92fcd0d816aec314415f55ae8b7e5102";

export const getGeoCode = async (location: string) => {
  const result = await axios
    .get<
      Geocode[]
    >(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`)
    .then((res) => res.data);
  return result;
};

export const getCurrentWeather = async ({ lat, lon }: Coords) => {
  const result = await axios
    .get<WeatherResponse>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`,
    )
    .then((res) => res.data);
  return result;
};
