import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = props => (
    <ItemDetails {...props}>              
        <Record field="diameter" label='Diameter'/>
        <Record field="rotationPeriod" label='Rotation Period'/>
        <Record field='population' label='Population'/>
    </ItemDetails>
);

const mapMethodsToProps = swapiService => {
    return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetImage,
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);