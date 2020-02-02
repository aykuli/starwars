import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

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

export default StarshipDetails;