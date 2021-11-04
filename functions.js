const getWeather = (data) => data.list[0].weather[0].description;

const getPopulation = (data) => data.city.population;

const getTemperature = (data) => data.list[0].main.temp;

const getSunriseTime = (data) => {
  // Time in seconds
  const unix_timestamp = data.city.sunrise;

  // Get date in miliseconds
  const date = new Date(unix_timestamp * 1000);

  let hours = date.getHours().toString();
  if (hours.length === 1) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  let seconds = date.getSeconds().toString();
  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
};

const getSunsetTime = (data) => {
  // Time in seconds
  const unix_timestamp = data.city.sunset;

  // Get date in miliseconds
  const date = new Date(unix_timestamp * 1000);

  let hours = date.getHours().toString();
  if (hours.length === 1) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  let seconds = date.getSeconds().toString();
  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
};

const renderData = (data, cityName) => {
  const city = document.querySelector("#city");
  const weather = document.querySelector("#weather");
  const population = document.querySelector("#population");
  const temperature = document.querySelector("#temperature");
  const sunrise = document.querySelector("#sunrise");
  const sunset = document.querySelector("#sunset");

  city.innerHTML = cityName;
  weather.innerHTML = getWeather(data);

  // Changing number format to German standard
  population.innerHTML = new Intl.NumberFormat("de-DE").format(
    parseInt(getPopulation(data))
  );

  // Changing number format to German standard
  // &#8451; code for degrees celsius
  temperature.innerHTML = `${new Intl.NumberFormat("de-DE").format(
    parseFloat(getTemperature(data))
  )} &#8451;`;

  sunrise.innerHTML = getSunriseTime(data);
  sunset.innerHTML = getSunsetTime(data);
};
