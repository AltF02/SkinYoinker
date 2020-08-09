import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import 'semantic-ui-css/semantic.min.css'

import Home from './components/Home/Home'
// import Footer from "./components/Footer/Footer";

export default class App extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}/>
                </Switch>
                {/* <Footer/> */}
            </Router>
        );
    }
}
