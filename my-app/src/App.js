import React, { useState } from 'react';
import './App.css';
function App() {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(newTime);
  function click() {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(click, 1000);
  return (
    <div className="div">
      <h1>Time</h1>
      <h1>{ctime}</h1>
      {/* <button className="btn" onClick={click}>Get Time</button> */}
    </div>
  );
}

export default App;
