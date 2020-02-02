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

export default PersonDetails;