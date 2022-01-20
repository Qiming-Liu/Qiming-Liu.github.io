// import './index.css';

// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const WeatherCard = () => {
//   const [city, setCity] = useState('London');
//   const [weatherData, setWeatherData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
//       );
//       setWeatherData(result.data);
//     };
//     fetchData();
//   }, [city]);

//   return <></>;
// };

// export default WeatherCard;
