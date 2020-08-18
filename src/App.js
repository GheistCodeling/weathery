import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import FetchForecasts from './components/FetchForecasts';
import './App.css';

class App  extends Component { 

  render() {
        return (
          <>
            <Router>
              <Navbar />
              <FetchForecasts />
              <Switch>
                <Route path="/" exact />
              </Switch>
            </Router>
          </>
      );
    }
  }

export default App;
