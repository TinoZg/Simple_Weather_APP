async function fetchApi(url, cityName) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}.\nPossible problems:\n1. City name doesn't exists.\n2. Internet connection is down.`;
      throw new Error(message);
    }

    const weatherData = await response.json();
    renderData(weatherData, cityName);

    getCityForm.reset();
    city.focus();
  } catch (error) {
    alert(error);
  }
}
const getWeather = (data) => data.list[0].weather[0].description;

const getPopulation = (data) => data.city.population;

const getTemperature = (data) => data.list[0].main.temp;

const getTime = (data) => {
  // Time in seconds
  const unix_timestamp = data;

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

  sunrise.innerHTML = getTime(data.city.sunrise);
  sunset.innerHTML = getTime(data.city.sunset);
};
