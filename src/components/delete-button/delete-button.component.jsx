import React from 'react';

import './delete-button.styles.scss';
import Minus from '../../assets/whiteminus.png';

const DeleteButton = (props) => {

    const handleClick = (e) => {
        props.toggleDelete(props.component);
    }

    return (
        <div 
            className='delete-button-container subcomponent-color'
            onClick={handleClick}>
            <img alt="minus" src={Minus}/>
        </div>
    )
}

export default DeleteButton;