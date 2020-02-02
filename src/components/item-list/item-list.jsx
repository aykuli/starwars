import React from 'react';

import './item-list.css';

const ItemList = (props) => {
    const { data, onItemSelected }= props;
    const items = data.map(({ id, name }) => {
        return (
            <li className='list-group-item'
                key={id}
                onClick={() => onItemSelected(id)}>
                {name}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    )
}

export default ItemList;