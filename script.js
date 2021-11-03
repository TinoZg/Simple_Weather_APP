fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=zagreb&units=metric&appid={API KEY}}"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
