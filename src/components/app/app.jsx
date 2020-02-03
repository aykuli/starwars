import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

export default class App extends Component {
    state = {
        isWasError: false,
        swapiService: new SwapiService(),
    }
    
    componentDidCatch() {
        this.setState({ isWasError: true });
    }

    onServiceToggle = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? 
                DummySwapiService : SwapiService;
            return { swapiService: new Service() };
        });
    }

    render() {
        if (this.state.isWasError)  {
            return <ErrorIndicator />
        }
        const updateInterval = Number("20000");

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceToggle={this.onServiceToggle}/>
                            <RandomPlanet updateInterval={updateInterval} />

                            <Route exact path="/" render={() => <h2>Welcome to StarWars data-base</h2>} />
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" component={StarshipPage} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
