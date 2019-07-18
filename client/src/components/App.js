import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <div className="App">
      <header className="App__header">
        <p>WAC</p>
      </header>
      {!isLogin && <Login setIsLogin={setIsLogin} />}
      {isLogin && <Home isLogin={isLogin}/>}
    </div>
  );
}

export default App;
