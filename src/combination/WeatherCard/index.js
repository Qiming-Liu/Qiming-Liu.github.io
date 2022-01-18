import './index.css';

import axios from 'axios';
import { useState } from 'react';

const WeatherCard = () => {
  const [getting, setGetting] = useState(false);
  const [city, setCity] = useState('London');
  const [lastCity, setLastCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const getWeather = async city => {
    if (city === lastCity) return;
    if (getting) return;
    setGetting(true);
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=10ae5df6e5644e3c9d882939221701&q=${city}&aqi=no`
    );
    setGetting(false);
    setLastCity(city);
    setWeatherData(data);
    console.log(data);
  };

  getWeather(city);

  return <ul>{JSON.stringify(weatherData)}</ul>;
};

export default WeatherCard;
