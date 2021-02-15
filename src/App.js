import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './static/App.css';
import DruidContainer from './components/DruidContainer';
import BeastDetailsContainer from './components/BeastDetailsContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Druid Wild Shapes</h1>
          <Route exact path="/" component={DruidContainer} />
          <Route exact path="/wildshapes/" component={BeastDetailsContainer} />
          <Route path="/wildshapes/:slug/" component={BeastDetailsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
