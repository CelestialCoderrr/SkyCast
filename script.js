document.getElementById("weatherForm").addEventListener("submit", getWeather);

function getWeather(event) {
  event.preventDefault();

  const city = document.getElementById("cityInput").value.trim();

  // Validate input: ensure it's not a number or empty
  if (!city || /^[0-9]+$/.test(city)) {
    handleError("Please enter a valid city name (not a number)!");
    return;
  }

  const apiKey = "5796abbde9106b7da4febfae8c44c232"; // Your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetchWeather(apiUrl)
    .then((data) => displayWeather(data))
    .catch((error) => handleError(error));
}

function fetchWeather(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("Response data:", data);
        if (data.list && data.list.length > 0) {
          resolve(data.list[0]); // Access the first city in the list
        } else {
          reject("City not found. Please check the spelling and try again.");
        }
      } else {
        reject("Failed to fetch data. Please try again later.");
      }
    };
    xhr.onerror = () => reject("Network error occurred!");
    xhr.send();
  });
}

function displayWeather(data) {
  document.getElementById("errorMessage").classList.add("hidden");
  document.getElementById("weatherDetails").classList.remove("hidden");

  document.getElementById("cityName").innerText = `Weather in ${data.name}`;
  document.getElementById("temperature").innerText = `${data.main.temp}°C`;
  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function handleError(error) {
  document.getElementById("weatherDetails").classList.add("hidden");
  document.getElementById("errorMessage").classList.remove("hidden");
  document.getElementById("errorMessage").innerText = error;
}
