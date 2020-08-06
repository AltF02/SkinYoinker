import React from 'react';
import logo from './assets/svg/logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './assets/css/App.css';

import Home from './views/Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
