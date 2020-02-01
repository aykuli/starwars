import React, { Component } from 'react';

import './item-list.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

class ItemList extends Component {
    state = {
        peopleList: null,
        isLoaded: false,
    }

    swapiService = new SwapiService();

    onError = () => {
        console.log('eror')
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then(peopleList => this.setState({ peopleList, isLoaded: true }))
            .catch(this.onError);
        
    }
    
    renderItems(list) {
        return list.map(({ id, name}) => (
            <li key={id} 
                className="list-group-item"
                onClick={() => this.props.onItemSelected(id)}>
                {name}
            </li>
        ));
    }

    render() {
        const { peopleList, isLoaded } = this.state;

        const elements = isLoaded ? this.renderItems(peopleList) : null;
        const spinner = !isLoaded ? <Spinner /> : null;

        return (
            <ul className="item-list list-group">
                {elements}
                {spinner}
            </ul>
        )
    }
}

export default ItemList;