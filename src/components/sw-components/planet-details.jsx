import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, swapiService }) => (
    <ItemDetails
        itemId={itemId} 
        getData={swapiService.getPlanet}
        getImgUrl={swapiService.getPlanetImage}>              
        <Record field="diameter" label='Diameter'/>
        <Record field="rotationPeriod" label='Rotation Period'/>
        <Record field='population' label='Population'/>
    </ItemDetails>
);

export default withSwapiService(PlanetDetails);