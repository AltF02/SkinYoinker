import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/scss/App.scss';

import Home from './components/Home/Home'

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact component={Home}/>
          </Switch>
      </Router>
  );
}


export default App;
