import React, { useState, useEffect } from "react";
import "./App.css";

import fruits from "../../node/lib/fruit";

const App: React.FC = () => {
  const [serverDate, setServerDate] = useState();
  useEffect(() => {
    fetch("/api/utils/time")
      .then(response => response.text())
      .then(text => setServerDate(text));
  }, [setServerDate]);

  const [serverFruits, setServerFruits] = useState();
  useEffect(() => {
    fetch("/api/utils/fruits")
      .then(response => response.text())
      .then(text => setServerFruits(text));
  }, [setServerFruits]);

  return (
    <div className="App">
      <header className="App-header">
        <p>The server time is {serverDate}</p>
        <p>The server fruits are {serverFruits}</p>
        <p>The client fruits are {JSON.stringify(fruits)}</p>
      </header>
    </div>
  );
};

export default App;
