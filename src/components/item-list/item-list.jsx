import React, { Component } from 'react';

import './item-list.css';

import Spinner from '../spinner';

class ItemList extends Component {
    state = {
        itemList: null,
        isLoaded: false,
    }

    onError = () => {
        console.log('eror')
    }

    componentDidMount() {        
        const { getData } = this.props;
        getData()
            .then(itemList => this.setState({ itemList, isLoaded: true }))
            .catch(this.onError);
        
    }
    
    renderItems(list) {
        return list.map(( item ) => {
            const { id } = item;
            const label = this.props.children(item);
            return (
                <li key={id} 
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                        {label}
                </li>
            )
        });
    }

    render() {
        const { itemList, isLoaded } = this.state;

        const elements = isLoaded ? this.renderItems(itemList) : null;
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