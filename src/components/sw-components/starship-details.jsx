import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, swapiService }) => (
    <ItemDetails
        itemId={itemId} 
        getData={swapiService.getStarship}
        getImgUrl={swapiService.getStarshipImage}>              
        <Record field="length" label='Length'/>
        <Record field='crew' label='Crew'/>
    </ItemDetails>
);

export default withSwapiService(StarshipDetails);