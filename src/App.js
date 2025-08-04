import "./App.css";
import React, { useEffect } from "react";
import Input from "./Component/Input";
import Card from "./Component/Card";
import Button from "./Component/Button";
import { useWeather } from "./Context/Weather";

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchLocationData();
  }, []);

  return (
    <div className="App">
      <h1>WeatherNow</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
    </div>
  );
}

export default App;
