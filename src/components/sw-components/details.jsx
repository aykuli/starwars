import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({ itemId }) => (
    <ItemDetails
        itemId={itemId} 
        getData={getPerson}
        getImgUrl={getPersonImage}>              
        <Record field="gender" label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
    </ItemDetails>
);

const PlanetDetails = ({ itemId }) => (
    <ItemDetails
        itemId={itemId} 
        getData={getPlanet}
        getImgUrl={getPlanetImage}>              
        <Record field="diameter" label='Diameter'/>
        <Record field="rotationPeriod" label='Rotation Period'/>
        <Record field='population' label='Population'/>
    </ItemDetails>
);

const StarshipDetails = ({ itemId }) => (
    <ItemDetails
        itemId={itemId} 
        getData={getStarship}
        getImgUrl={getStarshipImage}>              
        <Record field="length" label='Length'/>
        <Record field='crew' label='Crew'/>
    </ItemDetails>
);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};