import React from "react";

const WeatherDisplay = (props) => {
  const temperatureStyle = {
    color: props.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <h2>Weather Information</h2>

      <p>
        Temperature:{" "}
        <span style={temperatureStyle}>
          {props.temperature}
        </span>
      </p>

      <p>Conditions: {props.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
