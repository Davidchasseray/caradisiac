import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Res from './Components/Res';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{ marginBottom: '1rem' }} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search on Caradisiac</h1>
        </header>
        <Res/>
      </div>
    );
  }
}

export default App;
