import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import ReactAnimatedWeather from 'react-animated-weather';
import Charts from './Charts';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  const defaults = {
    icon: 'PARTLY_CLOUDY_DAY',
    color: 'white',
    size: 200,
    animate: true
  };

  return (
    <div className="App">
      <header className="App__header">
        <p className="App__logo">WAC</p>
      </header>
      <Charts />
     {!isLogin && <ReactAnimatedWeather
     className="App__animatedweather"
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />}
      {!isLogin && <Login setIsLogin={setIsLogin} />}
      {isLogin && <Home isLogin={isLogin}/>}
    </div>
  );
}

export default App;
