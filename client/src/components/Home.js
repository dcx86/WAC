import React, { useState, useEffect } from 'react';
import { getWeather } from './db-connection-functions';
import Loader from 'react-loader-spinner';
import './Home.css';


function Home({ isLogin }) {
  const [geolocation, setGeolocation] = useState({});
  const [weather, setWeather] = useState();


  useEffect(() => {
    console.log('this effect runs only on mount');
    getGeolocation();
  }, []);

  useEffect(() => {
    if (geolocation) {
      getWeather(geolocation, isLogin, setWeather);
    }
  }, [geolocation]);

  useEffect(() => {
  }, [weather]);



  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })
    });
  }

  return (
    <div className="Home">
      <div className="Home__body">
        {!weather ?
          <Loader type="Grid" color="#000000" height={120} width={120} /> :
          <div className="Home__summary">
            <p>You are in CITY!</p>
            <p>This is the current weather report</p>
            <p>Summary: {weather.summary}</p>
            <p>Temperature: {weather.temperature} C°</p>
            <p>Feels like: {weather.apparentTemperature} C°</p>
            <p>Humidity: {weather.humidity} %</p>
            <p>Pressure: {weather.pressure} Pa</p>
            <p>Windspeed: {weather.windSpeed} m/s</p>
            <p>Visibility: {weather.visibility} km</p>
          </div>
        }
      </div>
    </div>
  );



}
export default Home;