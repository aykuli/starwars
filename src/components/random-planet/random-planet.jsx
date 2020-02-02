import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        isLoading: true,
        isError: false,
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.planet !== prevProps.planet) {
            this.updatePlanet();
        }
    }

    onPlanetLoaded = (planet) => this.setState({planet, isLoading: false});

    onError = () => {
        this.setState({
            isError: true,
            isLoading: false,
        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, isLoading, isError } = this.state;
        const spinner = isLoading ? <Spinner /> : null;
        const errorMsg = isError ? <ErrorIndicator /> : null;
        const isShowData = !(isLoading || isError);
        const planetView = isShowData ? <PlanetView {...planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {planetView}
                {errorMsg}
            </div>
        );
    }
}

const PlanetView = (planet) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <>
            <img    className="planet-image"
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        alt="temp" />
            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
