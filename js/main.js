const API_KEY = "0485b91058fb2dc658e1e31194b10b74";

function getWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const forecast = data.weather[0].description;
      const humidity = data.main.humidity;

      // Convert temperature from Kelvin to Fahrenheit
      const highF = (high - 273.15) * 9/5 + 32;
      const lowF = (low - 273.15) * 9/5 + 32;

      // Display weather data on the page
      const weatherDataElem = document.getElementById("weather-data");
      weatherDataElem.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p><strong>High Temperature:</strong> ${highF.toFixed(1)}°F</p>
        <p><strong>Low Temperature:</strong> ${lowF.toFixed(1)}°F</p>
        <p><strong>Forecast:</strong> ${forecast}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Handle form submission
const formElem = document.querySelector('form');
formElem.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = document.getElementById('location-input').value;
  getWeather(location);});