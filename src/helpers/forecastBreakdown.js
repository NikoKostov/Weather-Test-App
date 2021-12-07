const forecastBreakdown = (forecast) => {
  const temperatureK = forecast.data.current.temp;
  const temperatureC = Math.round(temperatureK - 273.15);
  const iconID = forecast.data.current.weather[0].icon;
  const icon = (
    <img src={`http://openweathermap.org/img/wn/${iconID}@2x.png`} alt=""></img>
  );
  const description = forecast.data.current.weather[0].description;

  return {
    temperatureC,
    icon,
    description,
  };
};
export default forecastBreakdown;
