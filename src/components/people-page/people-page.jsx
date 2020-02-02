import React, { Component } from 'react';

import './people-page.css';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
        isWasError: false,
    }

    componentDidCatch() {
        this.setState({ isWasError : true });
    }
    
    onPersonSelected = (id) => {
        this.setState({ selectedPerson: id });
    }

    render() {
        const error = this.state.isWasError ? <ErrorIndicator /> : null;

        return (
            <div>
                {error}

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}

