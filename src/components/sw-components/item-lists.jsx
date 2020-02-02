import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,
    getAllStarships,
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderModelAndName = ({ name, model }) => <span>{name} (<span className="prop">{model}</span>)</span>;
const renderNameAndGender = ({ name, gender }) => <span>{name} (<span className="prop">{gender}</span>)</span>;
const renderNameAndDiameter = ({ name, diameter }) => <span>{name} (<span className="prop">diameter={diameter}</span>)</span>;

const PersonList = withData(
                        withChildFunction(ItemList, renderNameAndGender),
                        getAllPeople);
const PlanetList = withData(
                        withChildFunction(ItemList, renderNameAndDiameter),
                        getAllPlanets);
const StarshipList = withData(
                        withChildFunction(ItemList, renderModelAndName),
                        getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};