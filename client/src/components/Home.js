import React, { useState, useEffect } from 'react';
import { getWeather } from './db-connection-functions';
import Loader from 'react-loader-spinner';
import './Home.css';
import tempImg from '../img/temperature.svg';
import windImg from '../img/wind.svg';
import fogImg from '../img/fog.svg';
import Skycons from 'react-skycons';




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
          <div className="Home__spinner">
            <Loader  type="Grid" color="#d1d1d1" height={120} width={120} />
          </div> :
          <div className="Home__summary">
            <p>It is currently <b>{weather.summary}</b> in </p>
            <h1>Stockholm</h1>
            <div className="Home__summary__temp">
              <p>{Math.round(weather.temperature)}°</p>
            </div>
            <div className="Home__summary__item">
              <img src={tempImg} />
              <div>              
                <p>{Math.round(weather.apparentTemperature)} C°</p>
              </div>
            </div>
            <div className="Home__summary__item">
              <img src={windImg} />
              <p>{weather.windSpeed} m/s</p>
            </div>
            <div className="Home__summary__item">
              <img src={fogImg} />
              <p>{Math.round(weather.visibility)} km</p>
            </div>
          </div>
        }
      </div>
    </div>
  );

  // <p>Humidity: {weather.humidity} %</p>
  // <p>Pressure: {weather.pressure} Pa</p>


}
export default Home;