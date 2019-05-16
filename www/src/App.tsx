import React, { useState, useEffect } from "react";
import "./App.css";

import fruits from "@ctrlplusb/lib/fruit";

const App: React.FC = () => {
  const [serverDate, setServerDate] = useState();
  useEffect(() => {
    fetch("/api/utils/time")
      .then(response => response.text())
      .then(text => setServerDate(text));
  }, [setServerDate]);

  return (
    <div className="App">
      <header className="App-header">
        <p>The server time is {serverDate}</p>
        <ul>
          {fruits.map((fruit, idx) => (
            <li key={idx}>{fruit}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
