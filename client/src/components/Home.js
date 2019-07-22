import React, { useState, useEffect } from 'react';
import { getData } from './db-connection-functions';
import './Home.css';
import ReactAnimatedWeather from 'react-animated-weather';
import tempImg from '../img/temperature.svg';
import windImg from '../img/wind.svg';
import fogImg from '../img/fog.svg';
import Charts from './Charts';



function Home({ isLogin }) {
  const [geolocation, setGeolocation] = useState();
  const [data, setData] = useState();


  useEffect(() => {
    console.log('this effect runs only on mount');
    getGeolocation();
  }, []);

  useEffect(() => {
    if (geolocation) {
      getData(geolocation, isLogin, setData);
    }
  }, [geolocation]);

  useEffect(() => {
  }, [data]);



  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })
    });
  }



  const defaults = {
    icon: 'WIND',
    color: 'white',
    size: 350,
    animate: true
  };

  return (

    <div className="Home">
      <div className="Home__body">
        {!data ?
          <div className="Home__spinner">
            <ReactAnimatedWeather
              className="App__animatedweather"
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}/>
          </div> :
          <div className="Home__summary">
            <p>It is currently <b>{data.weather.currently.summary}</b> in </p>
            <h1>{data.location.city}</h1>
            <h6>{data.location.district}</h6>
            <div className="Home__summary__temp">
              <p>{Math.round(data.weather.currently.temperature)}°</p>
            </div>
            <div className="Home__summary__item">
              <img src={tempImg} />
              <div>              
                <p>{Math.round(data.weather.currently.apparentTemperature)} C°</p>
              </div>
            </div>
            <div className="Home__summary__item">
              <img src={windImg} />
              <p>{data.weather.currently.windSpeed} m/s</p>
            </div>
            <div className="Home__summary__item">
              <img src={fogImg} />
              <p>{Math.round(data.weather.currently.visibility)} km</p>
            </div>
            <div className="Home__summary__item">  
              <p>{data.aq.aqius} aqi</p> 
            </div>
            <div className="Home__summary__item">
              <Charts data={data}/>
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