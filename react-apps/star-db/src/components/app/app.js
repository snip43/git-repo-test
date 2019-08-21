import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';

import  { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
					<Router>
						<div className="stardb-app">
							<Header />
							<RandomPlanet />
						
						<Route path='/people' component={ PeoplePage } />
						<Route path='/planets' component={ PlanetPage } />
						<Route path='/starships' component={ StarshipPage } />

						</div>
					</Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}