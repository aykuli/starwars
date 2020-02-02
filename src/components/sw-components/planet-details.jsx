import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default PlanetDetails;