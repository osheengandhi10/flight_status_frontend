import React from 'react';
import './App.css';
import FlightStatus from './components/FlightStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Status Updates</h1>
      </header>
      <FlightStatus />
    </div>
  );
}

export default App;
