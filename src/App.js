import React, { Component } from 'react';
import './static/App.css';
import DruidContainer from './components/DruidContainer';

class App extends Component {
  render() {
    return (
        <main className="App">
          <h1>Druid Wild Shapes</h1>
          <DruidContainer />
        </main>
    );
  }
}

export default App;
