import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Profile from './components/Profile';

ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route component={ Header }/>
            <Switch>
                <Route path="/about" component= { About } />
                <Route path="/howitworks" component= { HowItWorks }/>
                <Route path="/profile" component= { Profile }/>
                <Route exact path="/" component= { App } />
            </Switch>
            <Route component={ Footer } />
        </div>
    </BrowserRouter>,
document.getElementById('root'));
unregister()
