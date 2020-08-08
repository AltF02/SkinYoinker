import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/scss/App.scss';
import 'semantic-ui-css/semantic.min.css'

import Home from './components/Home/Home'

export default class App extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                </Switch>
            </Router>
        );
    }
}
