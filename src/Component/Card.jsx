import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () => {

    const weather = useWeather();

  return (
    <div className="card-field">
      <img src={weather.data?.current?.condition.icon} />
      <h2>{weather.data?.current?.temp_c} °C</h2>
      <h2>{weather.data?.location?.name}</h2>
      <h4>{weather.data?.location?.region}, {weather.data?.location?.country}</h4>
      <p>{weather.data?.location?.lat} N, {weather.data?.location?.lon} W</p>
    </div>
  );
};

export default Card;
