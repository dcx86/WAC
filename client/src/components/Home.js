import React, { useState, useEffect } from 'react';
import { postUsers } from './db-connection-functions';

function Home() {

  // const [geolocation, setGeolocation] = useState({});
  // const [weather, setWeather] = useState({ daily: { summary: undefined } });


  // useEffect(() => {
  //   console.log('this effect runs only on mount');
  //   getGeolocation();
  //   // getWeather();
  // }, []);

  // useEffect(() => {
  //   if (geolocation){
  //     // postUsers(geolocation)
  //   }
  //   console.log('this effect runs only when geoloc&weather changes');
  // }, [geolocation, weather]);

  // const getGeolocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })
  //   });
  // }

  // const getWeather = () => {
  //   fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/269bb9a5c92626a0f53367cd2c92f543/${geolocation.lat},${geolocation.long}?units=si`)
  //     .then(data => data.json())
  //     .then(result => {
  //       if (result) setWeather(result)
  //     });
  // }

  return (
    <div className="Login">
      <header className="Login--header">
        <p>You are now logged in!</p>
      </header>
    </div>
  );

}
export default Home;