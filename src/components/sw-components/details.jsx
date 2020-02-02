import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => (
    <SwapiServiceConsumer>
        {
            ({ getPerson, getPersonImage}) => (
                <ItemDetails
                    itemId={itemId} 
                    getData={getPerson}
                    getImgUrl={getPersonImage}>              
                    <Record field="gender" label='Gender'/>
                    <Record field='eyeColor' label='Eye Color'/>
                </ItemDetails>
            )
        }
    </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemId }) => (
    <SwapiServiceConsumer>
        {
            ({ getPlanet, getPlanetImage }) => (
                <ItemDetails
                    itemId={itemId} 
                    getData={getPlanet}
                    getImgUrl={getPlanetImage}>              
                    <Record field="diameter" label='Diameter'/>
                    <Record field="rotationPeriod" label='Rotation Period'/>
                    <Record field='population' label='Population'/>
                </ItemDetails>
            )
        }
    </SwapiServiceConsumer>
);

const StarshipDetails = ({ itemId }) => (
    <SwapiServiceConsumer>
        {
            ({ getStarship, getStarshipImage }) => (
                <ItemDetails
                    itemId={itemId} 
                    getData={getStarship}
                    getImgUrl={getStarshipImage}>              
                    <Record field="length" label='Length'/>
                    <Record field='crew' label='Crew'/>
                </ItemDetails>
            )
        }
    </SwapiServiceConsumer>
);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};