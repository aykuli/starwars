import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

export default class App extends Component {
    state = {
        isShowRandomPlanet: true,
        isWasError: false,
    }

    componentDidCatch() {
        console.log('catch error');
        this.setState({ isWasError: true });
    }

    toggleRandomPlanet = () => {
        this.setState(prevState => this.setState({isShowRandomPlanet: !prevState.isShowRandomPlanet}));
    }

    render() {  
        const planet = this.state.isShowRandomPlanet ? <RandomPlanet /> : null;
        if (this.state.isWasError)  {
            return <ErrorIndicator />
        }

        return (
            <div className="stardb-app">
                <Header />
                {planet}

                <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                        {this.state.isShowRandomPlanet ? 'Hide': 'Show'} random planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
};
