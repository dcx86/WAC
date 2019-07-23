import React, { useState, useEffect } from 'react';
import { getData, getHistory } from './db-connection-functions';
import './Home.css';
import ReactAnimatedWeather from 'react-animated-weather';
import tempImg from '../img/temperature.svg';
import windImg from '../img/wind.svg';
import fogImg from '../img/fog.svg';
import Charts from './Charts';
import clearDay from '../img/weather/clearDay.svg'
import clearNight from '../img/weather/clearNight.svg'
import cloudy from '../img/weather/cloudy.svg'
import fog from '../img/weather/fog.svg'
import partlyCloudyDay from '../img/weather/partlyCloudyDay.svg'
import partlyCloudyNight from '../img/weather/partlyCloudyNight.svg'
import rain from '../img/weather/rain.svg'
import sleet from '../img/weather/sleet.svg'
import snow from '../img/weather/snow.svg'
import wind from '../img/weather/wind.svg'



function Home({ isLogin }) {
  const [geolocation, setGeolocation] = useState();
  const [data, setData] = useState();
  const [history, setHistory] = useState();


  useEffect(() => {
    console.log('this effect runs only on mount');
    getGeolocation();
  }, []);

  useEffect(() => {
    if (geolocation) getData(geolocation, isLogin, setData); 
  }, [geolocation]);


  useEffect(() => {
    if (data) {
      getHistory(isLogin, setHistory);
      console.log('fffffffffffffffff', data)
    }
  }, [data]);

  useEffect(() => {
  }, [history]);

  
  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })
      setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })

    });
  }

  const getWeatherIcon = (weather) => {
    switch(weather) {
      case "partly-cloudy-day" :
        return (<img src={partlyCloudyDay} />)
      case "partly-cloudy-night" :
        return (<img src={partlyCloudyNight} />)
      case "clear-day" :
        return (<img src={clearDay} />)
      case "clear-night" :
        return (<img src={clearNight} />)
      case "cloudy" :
        return (<img src={cloudy} />)
      case "fog" :
        return (<img src={fog} />)
      case "rain" :
        return (<img src={rain} />)
      case "sleet" :
        return (<img src={sleet} />)
      case "snow" :
        return (<img src={snow} />)
      case "wind" :
        return (<img src={wind} />)
    }
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
            <div>
              {getWeatherIcon(data.weather.currently.icon)}
            </div>
            <div className="Home__summary__item">
              <Charts data={data} history={history}/>
            </div>
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
           
          </div>
        }
      </div>

    </div>
  );

  // <p>Humidity: {weather.humidity} %</p>
  // <p>Pressure: {weather.pressure} Pa</p>


}
export default Home;