import React from 'react';
import styles from './Forecast.css';
import Day from './Day';

const Forecast = () => (
  <div data-testid="FORECAST" className={styles.forecast}>
    <h2 className={styles.header}>Forecast</h2>
    <div className={styles.weathers}>
      <Day
        day="MON" 
        temperature="9"
        weather={{ icon: '11d', description: 'Thunderstorm' }} 
      />
      <Day 
        day="TUE" 
        temperature="15"
        weather={{ icon: '01d', description: 'Clear' }} 
      />
      <Day 
        day="WED" 
        temperature="11"
        weather={{ icon: '03d', description: 'Clouds' }} 
      />
      <Day 
        day="THU" 
        temperature="7"
        weather={{ icon: '50d', description: 'Mist' }} 
      />
      <Day 
        day="FRI" 
        temperature="8"
        weather={{ icon: '09d', description: 'Rain' }} 
      />
    </div>
  </div>
);

export default Forecast;