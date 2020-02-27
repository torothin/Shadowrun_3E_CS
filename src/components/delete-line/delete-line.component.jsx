import React from 'react';

import './delete-line.styles.scss';
import Minus from '../../assets/whiteminus.png';


const DeleteLine = (props) => {

    const deleteItem = (e) => {
        console.log(props.name);
        props.deleteItem(props.component,props.name);
    }

    return (
        <div 
            className="delete-line-container"
            onClick={deleteItem}
        >
            <img alt="minus" src={Minus}/>
        </div>
    )
}

export default DeleteLine;