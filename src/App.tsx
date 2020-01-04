import React, { useState, useEffect } from 'react';
import appName from '../lib/app-name';
import currentTime from '../lib/current-time';
import './App.css';

const App: React.FC = () => {
  const [serverDate, setServerDate] = useState<string>();
  useEffect(() => {
    fetch('/api/time')
      .then(response => response.text())
      .then(text => setServerDate(text));
  }, [setServerDate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
        <p>The time on the server is {serverDate}</p>
        <p>The time on client is {currentTime()}</p>
      </header>
    </div>
  );
};

export default App;
