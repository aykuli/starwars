import React, { Component } from 'react';

import './app.css';

import SwapiService from '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
// import ErrorButton from '../error-button';
import Row from '../row';
import { Record } from '../item-details';

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

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={11} 
                getData={getPerson}
                getImgUrl={getPersonImage}>                    
                <Record field="gender" label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
                itemId={11} 
                getData={getStarship}
                getImgUrl={getStarshipImage}>
                <Record field="length" label='Length'/>
                <Record field='crew' label='crew'/>
            </ItemDetails>
        );
        if (this.state.isWasError)  {
            return <ErrorIndicator />
        }

        return (
            <div className="stardb-app">
                <Header />
                {planet}

                <Row left={starshipDetails} right={personDetails} />

                {/* <div className="row mb2 button-row">
                    <button className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                        {this.state.isShowRandomPlanet ? 'Hide': 'Show'} random planet
                    </button>
                    <ErrorButton />
                </div> */}

                {/* <PeoplePage /> */}
                
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
