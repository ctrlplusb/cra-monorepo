import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [serverDate, setServerDate] = useState();
  useEffect(() => {
    fetch('/api/time')
      .then(response => response.text())
      .then(text => setServerDate(text));
  }, [setServerDate]);

  return (
    <div className="App">
      <header className="App-header">
        <p>The time on the server is {serverDate}</p>
      </header>
    </div>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
