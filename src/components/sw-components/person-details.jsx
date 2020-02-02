import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => (
    <ItemDetails
        itemId={itemId} 
        getData={swapiService.getPerson}
        getImgUrl={swapiService.getPersonImage}>              
        <Record field="gender" label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
    </ItemDetails>
);

export default withSwapiService(PersonDetails);