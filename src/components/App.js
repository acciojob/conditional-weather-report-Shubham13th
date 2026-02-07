
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
const App = () => {

  const WeatherDisplayData = {
    temperature: "25°C",
    conditions: "Sunny",
  };

  const [weatherData, setWeatherData] = React.useState(WeatherDisplayData);

  return (
    <div>
      {/* Do not remove the main div */}

      <WeatherDisplay
        temperature={WeatherDisplayData.temperature}
        conditions={WeatherDisplayData.conditions}
      />
    </div>
  )
}

export default App
