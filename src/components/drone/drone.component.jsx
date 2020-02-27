import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ConditionTracker from '../condition-tracker/condition-tracker.component';

import './drone.styles.scss';

const Drone = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const input = e.target.value;
        props.onChange(type, input, "drones", props.droneIndex);
    }

    const {name,type,handling,sig,speed,acc,body,armor,pilot,sensors,econ,fuel,other} = props.drone;

    return (
        <div className="drone-container" id="index">
            <div className="stat-table">
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td>Name</td><td><input className="drone-input" type="text" value={name} name="name" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Type</td><td><input className="drone-input" type="text" value={type} name="type" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Handling</td><td><input className="drone-input" type="text" value={handling} name="handling" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Sig</td><td><input className="drone-input" type="text" value={sig} name="sig" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Speed</td><td><input className="drone-input" type="text" value={speed} name="speed" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Acc</td><td><input className="drone-input" type="text" value={acc} name="acc" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Body</td><td><input className="drone-input" type="text" value={body} name="body" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Armor</td><td><input className="drone-input" type="text" value={armor} name="armor" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Pilot</td><td><input className="drone-input" type="text" value={pilot} name="pilot" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Sensors</td><td><input className="drone-input" type="text" value={sensors} name="sensors" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    <tr>
                        <td>Econ</td><td><input className="drone-input" type="text" value={econ} name="econ" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        <td>Fuel</td><td><input className="drone-input" type="text" value={fuel} name="fuel" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
            <TextareaAutosize 
                className="drone-text" 
                type="text" 
                value={other} 
                name="other" 
                onChange={handleChange} 
                onBlur={handleChange}
                maxRows={10}
            />
            <div className="condition-monitor">
                <ConditionTracker 
                    conditionTracker={props.drone.condition}
                    updateCondition={props.updateCondition}
                    trackerName="condition"
                    stun={false}
                    physical={true}
                    size={'small'}
                    index={props.droneIndex}
                    stateComponent="drones"

                />
            </div>
            
        </div>
    )
}

export default Drone;