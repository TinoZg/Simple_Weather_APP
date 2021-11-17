import fetchApi from "./module/functions.js";

const getCityForm = document.querySelector("form");

getCityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = document.querySelector("input[name=Name]");
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&appid=d5da566641898b814482126740a1971f`;

  fetchApi(url, city.value);
  getCityForm.reset();
  city.focus();
});
