import React from "react";
import { useWeather } from "../Context/Weather";

const Input = () => {
  const weather = useWeather();
  
  return (
    <input
      className="input-field"
      placeholder="Enter the City"
      value={weather.city || ""}
      onChange={(e) => weather.setCity(e.target.value)}
    ></input>
  );
};

export default Input;
