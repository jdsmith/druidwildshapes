import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DruidContainer from './components/DruidContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Druid Wild Shapes</h1>
        <DruidContainer />
      </div>
    );
  }
}

export default App;
