const getCityForm = document.querySelector("form");

getCityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = document.querySelector("input[name=Name]");
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&appid=d5da566641898b814482126740a1971f`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderData(data, city.value);
      console.log(data);
    })
    .then(() => {
      // Reset form
      getCityForm.reset();

      // Give focus to input field
      city.focus();
    })
    .catch((error) => console.log(error));
});
