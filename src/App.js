import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to space invadors</h2>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
