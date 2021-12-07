import React from "react";
import forecastBreakdown from "../../helpers/forecastBreakdown";

function Header({ forecast }) {
  const { temperatureC, icon, description } =
    forecast && forecastBreakdown(forecast);
  const celsius = temperatureC && <span>&#176;C</span>;
  return (
    <div>
      <h1>Weather App</h1>
      <div>{icon}</div>
      <h2>{description}</h2>
      <h2>
        {temperatureC}
        {celsius}
      </h2>
    </div>
  );
}

export default Header;
