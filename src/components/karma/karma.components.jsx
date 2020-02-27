import React from 'react'

import './karma.styles.scss';

const Karma = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        props.onChange(type,value,'karma');
    }

    return (
        <div className='karma-container component-container-color' style={{order: `${props.style}`}}>
            <h3>Karma</h3>
            <div className="subcomponent-container subcomponent-color">
                <div className="pool-container">Karma Pool
                    <input 
                        className="smaller-input"
                        type="text" 
                        name="pool" 
                        value={props.karma.pool}
                        onChange={handleChange} 
                        onBlur={handleChange}
                        autocomplete="off"
                    />
                </div>
                <div className="pool-container">Good Karma
                    <input 
                        className="smaller-input"
                        type="text" 
                        name="good" 
                        value={props.karma.good}
                        onChange={handleChange} 
                        onBlur={handleChange}
                        autocomplete="off"
                    />
                </div>
                <div className="pool-container">Karma Spent
                    <input 
                        className="smaller-input"
                        type="text" 
                        name="spent" 
                        value={props.karma.spent}
                        onChange={handleChange} 
                        onBlur={handleChange}
                        autocomplete="off"
                    />
                </div>
            </div>
        </div>
    )
}

export default Karma;