import React from 'react'

const WeatherDisplay = (props) => {

    const numericTemp = parseInt(props.temperature);

    const temperatureStyle = {
        color: numericTemp > 20 ? "red" : "blue",
    };

    return (
        <div>
            <h2>Weather Information</h2>

            <p>
                Temperature:{" "}
                <span style={temperatureStyle}>
                    {numericTemp}°C
                </span>
            </p>

            <p>Conditions: {props.conditions}</p>
        </div>
    )
}

export default WeatherDisplay
