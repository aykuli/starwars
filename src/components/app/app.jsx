import React, { Component } from 'react';

import './app.css';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';

export default class App extends Component {
    state = {
        isShowRandomPlanet: true,
        isWasError: false,
        swapiService: new DummySwapiService(),
    }
    
    componentDidCatch() {
        console.log('catch error');
        this.setState({ isWasError: true });
    }

    toggleRandomPlanet = () => {
        this.setState(prevState => this.setState({isShowRandomPlanet: !prevState.isShowRandomPlanet}));
    }

    onServiceToggle = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? 
                DummySwapiService : SwapiService;
            return { swapiService: new Service() };
        });
    }

    render() {  
        const planet = this.state.isShowRandomPlanet ? <RandomPlanet /> : null;

        if (this.state.isWasError)  {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceToggle={this.onServiceToggle}/>
                        {planet}
                        <Row left={<PersonList />} right={<PersonDetails itemId={5}/>} />
                        <Row left={<PlanetList />} right={<PlanetDetails itemId={10}/>} />
                        <Row left={<StarshipList />} right={<StarshipDetails itemId={11}/>} />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
