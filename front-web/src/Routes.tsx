import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Records from './pages/Records';
import Charts from './pages/Charts';
import Header from './components/Header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records"> 
                <Records />
            </Route>
            <Route path="/charts"> 
                <Charts />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;