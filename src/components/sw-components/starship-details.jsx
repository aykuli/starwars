import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = props => (
    <ItemDetails {...props}>              
        <Record field="length" label='Length'/>
        <Record field='crew' label='Crew'/>
    </ItemDetails>
);

const mapMethodsToProps = swapiService => {
    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getStarshipImage,
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);