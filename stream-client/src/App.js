import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ReactFlvPlayer} from 'react-flv-player'

function App() {

  return (
    <div className="App">
      <ReactFlvPlayer
          url = "http://localhost:8000/live/testing.flv"
          heigh = "100%"
          width = "100%"
          isMuted={true}
        />
    </div>
  );
}

export default App;
