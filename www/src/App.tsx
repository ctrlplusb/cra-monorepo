import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [serverDate, setServerDate] = useState();
  useEffect(() => {
    fetch("/api/utils/time.ts")
      .then(response => response.text())
      .then(text => setServerDate(text));
  }, [setServerDate]);

  return (
    <div className="App">
      <header className="App-header">
        <p>The server time is {serverDate}</p>
      </header>
    </div>
  );
};

export default App;
