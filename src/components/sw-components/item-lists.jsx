import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, compose, withChildFunction } from '../hoc-helpers';

const renderModelAndName = ({ name, model }) => (
    <span>
        {name} (<span className="prop">{model}</span>)
    </span>
);
const renderNameAndGender = ({ name, gender }) => (
    <span>
        {name} (<span className="prop">{gender}</span>)
    </span>
);
const renderNameAndDiameter = ({ name, diameter }) => (
    <span>
        {name} (<span className="prop">diameter={diameter}</span>)
    </span>
);

const mapPersonMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllPeople,
    }
}

const mapPlanetMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllPlanets,
    }
}

const mapStarshipMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllStarships,
    }
}

const PersonList = compose( withSwapiService(mapPersonMethodsToProps),
                            withData,
                            withChildFunction(renderNameAndGender))
                            (ItemList);
const PlanetList = compose( withSwapiService(mapPlanetMethodsToProps),
                            withData,
                            withChildFunction(renderNameAndDiameter))
                            (ItemList);
const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps),
                            withData,
                            withChildFunction(renderModelAndName))
                            (ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};