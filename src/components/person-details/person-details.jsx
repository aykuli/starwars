import React, { Component } from 'react';

import './person-details.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class PersonDetail extends Component {
    state = {
        person: null,
        isLoaded: false,
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePerson();
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) return;

        this.swapiService.getPerson(personId)
            .then(this.onPersonLoaded)
            .catch(this.onError);

    }

    onPersonLoaded = (person) => {
        this.setState({person, isLoaded: true});
    }

    onError = () => {
        console.log('eror')
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    render() {        
        if (!this.state.person) return <span>Select person from list...</span>;
        const { person, isLoaded } = this.state;
        const spinner = !isLoaded ? <Spinner /> : null;
        const info = isLoaded ? renderPersonInfo(person) : null;
        return (
            <div className="person-details card">                
                {info}
                {spinner}
            </div>
        );
    }
}

const renderPersonInfo = (person) => {
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
        <>
            <img    className="person-image"
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        alt={name} />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton />
            </div>
        </>
    )
}