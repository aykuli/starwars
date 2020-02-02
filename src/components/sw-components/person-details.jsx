import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = props => (
    <ItemDetails {...props}>              
        <Record field="gender" label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
    </ItemDetails>
);

const mapMethodsToProps = swapiService => {
    return {
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImage,
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);