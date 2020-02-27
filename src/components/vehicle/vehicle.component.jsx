import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ConditionTracker from '../condition-tracker/condition-tracker.component';

import './vehicle.styles.scss';

const Vehicle = (props) => {
    
    const handleChange = (e) => {
        console.log(e.target);
        const type = e.target.name;
        const input = e.target.value;
        props.onChange(type, input, "vehicles", props.vehicleIndex);
    }
    
    const {name,type,speed,handling,body,armor,sig,nav,sensors,seating,econ,fuel,other} = props.vehicle;

    return (
        <div className="vehicle-container">
            <div className="stat-table">
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td>Name</td><td><input className="vehicle-input" type="text" value={name} name="name" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Type</td><td><input className="vehicle-input" type="text" value={type} name="type" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Handling</td><td><input className="vehicle-input" type="text" value={handling} name="handling" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Sig</td><td><input className="vehicle-input" type="text" value={sig} name="sig" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Speed</td><td><input className="vehicle-input" type="text" value={speed} name="speed" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Acc</td><td><input className="vehicle-input" type="text" value={seating} name="seating" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Body</td><td><input className="vehicle-input" type="text" value={body} name="body" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Armor</td><td><input className="vehicle-input" type="text" value={armor} name="armor" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Pilot</td><td><input className="vehicle-input" type="text" value={nav} name="nav" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Sensors</td><td><input className="vehicle-input" type="text" value={sensors} name="sensors" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Econ</td><td><input className="vehicle-input" type="text" value={econ} name="econ" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Fuel</td><td><input className="vehicle-input" type="text" value={fuel} name="fuel" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
            <TextareaAutosize 
                className="vehicle-text" 
                type="text" 
                value={other} 
                name="other" 
                onChange={handleChange} 
                onBlur={handleChange}
                maxRows={10}
            />
            <div className="condition-monitor">
                <ConditionTracker 
                    conditionTracker={props.vehicle.condition}
                    updateCondition={props.updateCondition}
                    trackerName="condition"
                    stun={false}
                    physical={true}
                    size={'small'}
                    index={props.vehicleIndex}
                    stateComponent="vehicles"

                />
            </div>
            
        </div>
    )
}

export default Vehicle;