import React, { Component } from 'react';

import './app.css';

import SwapiService from '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

export default class App extends Component {
    state = {
        isShowRandomPlanet: true,
        isWasError: false,
    }
    
    swapiService = new SwapiService();

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
                
                {/* <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList   onItemSelected={this.onPersonSelected}
                                    getData={this.swapiService.getAllPlanets}
                                    renderItem={item => item.name}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList   onItemSelected={this.onPersonSelected}
                                    getData={this.swapiService.getAllStarships}
                                    renderItem={item => item.name}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div> */}
                {/* </div> */}
            </div>
        );
    }
};
