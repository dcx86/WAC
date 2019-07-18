import React, { useState, useEffect } from 'react';
import { postData } from './db-connection-functions';

function Home() {
  const [geolocation, setGeolocation] = useState({});
  // const [weather, setWeather] = useState({ daily: { summary: undefined } });


  useEffect(() => {
    console.log('this effect runs only on mount');
    getGeolocation();
    // getWeather();
  }, []);

  useEffect(() => {
    if (geolocation) {
      postData(geolocation);
    }
  }, [geolocation]);

  // useEffect(() => {
  //   if (geolocation){
  //     // postUsers(geolocation)
  //   }
  //   console.log('this effect runs only when geoloc&weather changes');
  // }, [geolocation, weather]);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })
    });
  }

  return (
    <div className="Home">
      <header className="Home--header">
        <p>You are now logged in!</p>
      </header>
    </div>
  );

}
export default Home;