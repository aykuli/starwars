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
import { 
    PeoplePage, 
    PlanetPage, 
    StarshipPage,
    LoginPage, 
    SecretPage 
} from '../pages';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
    state = {
        isWasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false,
    }
    
    componentDidCatch() {
        this.setState({ isWasError: true });
    }

    onLogin = () => {
        this.setState({ isLoggedIn: true});
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
        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header 
                                onServiceToggle={this.onServiceToggle}/>
                            <RandomPlanet 
                                updateInterval={updateInterval} />

                            <Route  path="/" 
                                    exact 
                                    render={() => <h2 className="main-page">Welcome to StarWars data-base</h2>} />
                            
                            <Route  path="/people"
                                    render={() => <h2 className="main-page">People</h2>} />
                            <Route  path="/people" 
                                    component={PeoplePage} />
                            
                            <Route  path="/planets" 
                                    component={PlanetPage} />
                            <Route  path="/starships" 
                                    exact 
                                    component={StarshipPage} />
                            <Route  path="/starships/:id" 
                                    render={({ match: {params: {id}}}) => <StarshipDetails itemId={id}/>} />

                            <Route  
                                path="/login"
                                render={() => 
                                    <LoginPage 
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}/>} />
                            <Route  
                                path="/secret"
                                render={() => 
                                    <SecretPage isLoggedIn={isLoggedIn }/>} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
