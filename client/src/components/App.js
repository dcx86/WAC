import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';

function App() {
  const [login, setLogin] = useState();
  useEffect(() => {
    console.log(login);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>WAC</p>
      </header>
      {!login && <Login login={login} setLogin={setLogin} />}
      {false && <Home />}
    </div>
  );
}

export default App;
