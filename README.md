# SkyCast

## Description
This is a responsive Weather App that provides real-time weather updates for any city entered by the user. The app uses the OpenWeatherMap API to fetch data and displays essential weather details such as temperature, humidity, and weather conditions, along with a representative weather icon. It's designed to be simple, user-friendly, and accessible across devices.

## Features
- **Real-time Weather Data**: Fetches up-to-date weather details for any valid city.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Error Handling**: Provides error messages for invalid inputs or when the city cannot be found.
- **Weather Icon**: Displays a visual representation of the current weather condition.
- **Modern UI**: Styled with a clean and minimalistic interface using CSS.

## Technologies Used
- **HTML5**: Structure of the web page.
- **CSS3**: Styling for a responsive and visually appealing design.
- **JavaScript (ES6)**: Handles user input, fetches API data, and updates the UI dynamically.
- **OpenWeatherMap API**: Provides weather data.
- **XMLHttpRequest**: Used to fetch API data via HTTP requests.

## How to Run the Project
1. **Extract Files**:
   - If downloaded as a `.zip`, extract the folder.
2. **Open in Browser**:
   - Open `index.html` in any modern browser to use the app.
3. **Test the App**:
   - Enter the name of a city in the input field and click "Get Weather" to see the results.

## Usage Instructions
1. Open the Weather App in your browser.
2. Enter the name of a city in the input field.
3. Click on the **"Get Weather"** button.
4. View the weather details displayed, including:
   - City name
   - Temperature (in Celsius)
   - Humidity percentage
   - Weather condition description
   - Icon representing the weather
5. If the city name is invalid or there's an issue fetching data, an error message will appear.


## API Key
The project uses the OpenWeatherMap API. To run the project, ensure the API key in the `script.js` file (`apiKey` variable) is valid. You can obtain your API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

## Challenges Faced
1. Handling incorrect or invalid city names.
2. Ensuring proper error messages are displayed for network issues or API errors.
3. Making the app responsive across different screen sizes.

## Future Enhancements
- Add support for multiple units (Celsius, Fahrenheit).
- Display a 5-day weather forecast.
- Implement geolocation to fetch weather data for the user's current location automatically.
- Add animations to make the UI more interactive.


---

