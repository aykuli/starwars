import React, { Component } from 'react';

import './people-page.css';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import ItemDetail from '../item-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
    }
    
    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        this.setState({ selectedPerson: id });
    }
    
    render() {
        const itemList = (
            <ItemList   onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}>
                {i => `${i.name} (${i.gender}`}
            </ItemList>
        );
        const personDetails = (
            <ErrorBoundry>
                <ItemDetail personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (
            <div>
                <Row left={itemList} right={personDetails} />
            </div>
        );
    }
}

