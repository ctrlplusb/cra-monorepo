import { hot } from "react-hot-loader/root";
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
        <p>The server requested time is {serverDate}</p>
        <p>The server requested fruits are {serverFruits}</p>
        <p>The client imported fruits are {JSON.stringify(fruits)}</p>
      </header>
    </div>
  );
};

export default (process.env.NODE_ENV === "development" ? hot(App) : App);
