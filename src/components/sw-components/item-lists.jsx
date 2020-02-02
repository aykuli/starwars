import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

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

const PersonList = withSwapiService(
                    withData(
                        withChildFunction(ItemList, renderNameAndGender)),
                    mapPersonMethodsToProps);
const PlanetList = withSwapiService(
                    withData(
                        withChildFunction(ItemList, renderNameAndDiameter)),
                        mapPlanetMethodsToProps)
const StarshipList = withSwapiService(
                        withData(
                        withChildFunction(ItemList, renderModelAndName)),
                        mapStarshipMethodsToProps)

export {
    PersonList,
    PlanetList,
    StarshipList
};