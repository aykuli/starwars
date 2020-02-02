import React, { Component } from 'react';

import './item-details.css';

import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Record = ({ item, field, label}) => {
    return (        
        <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
    )
};

export { Record };

export default class ItemDetails extends Component {
    state = {
        item: null,
        isLoaded: false,
        image: null,
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const { itemId, getData, getImgUrl } = this.props;
        if (!itemId) return;

        getData(itemId)
            .then(item => this.setState({
                item, 
                isLoaded: true,
                image: getImgUrl(item.id),
            }))
            .catch(this.onError);

    }
    onError = () => {
        console.log('eror')
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    render() {        
        const { item, isLoaded, image } = this.state;

        if (!this.state.item) return <span>Select item from list...</span>;

        const { name } = item;

        const spinner = !isLoaded ? <Spinner /> : null;
       
        return (
            <div className="item-details card">                
                <img    className="item-image"
                        src={image}
                        alt={name} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, { item });
                            })
                        }                      
                    </ul>
                    <ErrorButton />
                </div>
                {spinner}
            </div>
        );
    }
}