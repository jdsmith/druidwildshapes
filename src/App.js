import React, { Component } from 'react';
import './static/App.css';
import DruidContainer from './components/DruidContainer';

class App extends Component {
  render() {
    return (
        <main className="App">
          <h1>Druid Wild Shapes</h1>
          <DruidContainer />
          <footer>
            <a href="https://open5e.com/">
              Powered by the Open5e API
            </a>
          </footer>
        </main>
    );
  }
}

export default App;
