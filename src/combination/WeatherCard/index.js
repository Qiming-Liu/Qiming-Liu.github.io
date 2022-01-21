import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './index.css';

import Current from 'components/Weather/Current';
import OtherCities from 'components/Weather/OtherCities';
import VerticalDivider from 'components/Weather/VerticalDivider';
import Forecast from 'components/Weather/Forecast';

const WeatherCard = () => {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://api.weatherapi.com/v1/current.json?key=10ae5df6e5644e3c9d882939221701&q=${city}&aqi=no`
      );
      setWeatherData(result.data);
    };
    fetchData();
  }, [city]);

  return (
    <>
      <div className={styles.app}>
        <div className={styles.weather}>
          <div className={styles.top}>
            <Current />
          </div>
          <div className={styles.bottom}>
            <OtherCities />
            <VerticalDivider
              className={styles.verticalDivider}
              color="rgba(0, 0, 0, 0.1)"
              width="3px"
            />
            <Forecast />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
