
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
const App = () => {

  const WeatherDisplayData = {
    temperature: 25,
    conditions: "Sunny",
  };

  const [weatherData] = React.useState(WeatherDisplayData);

  return (
    <div>
      {/* Do not remove the main div */}

      <WeatherDisplay
        temperature={weatherData.temperature}
        conditions={weatherData.conditions}
      />
    </div>
  )
}

export default App
