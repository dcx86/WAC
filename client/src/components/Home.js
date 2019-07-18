import React, { useState, useEffect } from 'react';
import { getWeather } from './db-connection-functions';

function Home({isLogin}) {
  const [geolocation, setGeolocation] = useState({});
  const [weather, setWeather] = useState({});


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
      <header className="Home--header">
        <p>You are now logged in!</p>
        {weather && <p>{weather.summary}</p>}
      </header>
    </div>
  );

}
export default Home;