import React, { Component } from 'react';

import './people-page.css';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';

class ErrorBoundry extends Component {
    state = {
        isWasError: false,
    }

    componentDidCatch() {
        this.setState({ isWasError : true });
    }

    render() {
        return this.state.isWasError ? <ErrorIndicator /> : this.props.children;
    }
}

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
        const personDetails = <PersonDetails personId={this.state.selectedPerson}/>;
        return (
            <div>
                <ErrorBoundry>
                    <Row left={itemList} right={personDetails} />
                </ErrorBoundry>
            </div>
        );
    }
}

