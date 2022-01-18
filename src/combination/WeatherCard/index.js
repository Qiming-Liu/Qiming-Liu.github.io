import './index.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

const WeatherCard = () => {
  const [getting, setGetting] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // if (getting) return;
    // setGetting(true);
    axios
      .get(
        'http://api.weatherapi.com/v1/current.json?key=10ae5df6e5644e3c9d882939221701&q=London&aqi=no'
      )
      .then(res => {
        setWeatherData(res.data);
        console.log(res.data);
        // setGetting(false);
      })
      .catch(error => {
        // setGetting(false);
      });
  });

  return (
    <ul>
      {JSON.stringify(weatherData)}
    </ul>
  );
};

export default WeatherCard;
