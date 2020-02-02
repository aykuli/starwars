import React, { Component } from 'react';

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
        console.log('catch error');
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

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceToggle={this.onServiceToggle}/>
                        <RandomPlanet updateInterval={2000} />

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
