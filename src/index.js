import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';

ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route component={ Header }/>
            <Switch>
                <Route exact path="/" component= { App } />
            </Switch>
        </div>
    </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
