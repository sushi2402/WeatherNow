import { createContext, useContext, useState } from "react";
import {
  getWeatherDataAPI,
  getWeatherDataForCurrentLocation,
} from "../Api/index";

export const WeatherContext = createContext(null);

export const useWeather = () => {
  const weather = useContext(WeatherContext);
  return weather;
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataAPI(city);
    setData(response);
  };

  const fetchLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{ data, city, setCity, fetchData, fetchLocationData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
