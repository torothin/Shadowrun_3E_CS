import React from 'react';

import './add-line.styles.scss';
import Plus from '../../assets/whiteplus.png';

const AddLine = (props) => {

    const handleClick = (e) => {
        props.addLine(props.component);
    }

    return (
        <div 
            className='add-line-container subcomponent-color'
            onClick={handleClick}>
            <img alt="plus" src={Plus}/>
        </div>
    )
}

export default AddLine;