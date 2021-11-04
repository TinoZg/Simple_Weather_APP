const getWeather = (data) => data.list[0].weather[0].description;

const getPopulation = (data) => data.city.population;

const getTemperature = (data) => data.list[0].main.temp;

const renderData = (data, cityName) => {
  const city = document.querySelector("#city");
  const weather = document.querySelector("#weather");
  const population = document.querySelector("#population");
  const temperature = document.querySelector("#temperature");

  // Capitalize first letter of every word and render on screen
  city.innerHTML = cityName[0].toUpperCase() + cityName.substring(1);
  weather.innerHTML = getWeather(data);
  population.innerHTML = new Intl.NumberFormat("de-DE").format(
    parseInt(getPopulation(data))
  );
  temperature.innerHTML = `${new Intl.NumberFormat("de-DE").format(
    parseFloat(getTemperature(data))
  )} &#8451;`;
};
