import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './remote-deck.styles.scss';
import ConditionTracker from '../condition-tracker/condition-tracker.component';


const RemoteDeck = (props) => {
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        props.onChange(type,value,'remoteDecks',props.remoteDeckIndex);
    }

    const {
        rating,storage,hjacks,extras,flux,range,encrypt,decrypt,eccm,name,type
    } = props.remoteDeck;
    
    return (
        <div className="remote-deck-container">
            <div className="stat-table">
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td>Name</td><td><input className="remote-deck-input" type="text" value={name} name="name" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Type</td><td><input className="remote-deck-input" type="text" value={type} name="type" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Rating</td><td><input className="remote-deck-input" type="text" value={rating} name="rating" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>H. Jacks</td><td><input className="remote-deck-input" type="text" value={hjacks} name="hjacks" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Flux</td><td><input className="remote-deck-input" type="text" value={flux} name="flux" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Range</td><td><input className="remote-deck-input" type="text" value={range} name="range" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Encrypt</td><td><input className="remote-deck-input" type="text" value={encrypt} name="encrypt" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Decrypt</td><td><input className="remote-deck-input" type="text" value={decrypt} name="decrypt" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>ECCM</td><td><input className="remote-deck-input" type="text" value={eccm} name="eccm" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Storage</td><td><input className="remote-deck-input" type="text" value={storage} name="storage" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            
                <div className="remote-deck-condition-monitor">
                    <div>Command Channel</div>
                    <ConditionTracker 
                        conditionTracker={props.remoteDeck.command}
                        updateCondition={props.updateCondition}
                        trackerName="command"
                        stun={false}
                        physical={true}
                        size={'small'}
                        index={props.remoteDeckIndex}
                        stateComponent="remoteDecks"
                    />
                    <div>Simsense Channel</div>
                    <ConditionTracker 
                        conditionTracker={props.remoteDeck.simsense}
                        updateCondition={props.updateCondition}
                        trackerName="simsense"
                        stun={false}
                        physical={true}
                        size={'small'}
                        index={props.remoteDeckIndex}
                        stateComponent="remoteDecks"
                    />
                    <div>System Channel</div>
                    <ConditionTracker 
                        conditionTracker={props.remoteDeck.system}
                        updateCondition={props.updateCondition}
                        trackerName="system"
                        stun={false}
                        physical={true}
                        size={'small'}
                        index={props.remoteDeckIndex}
                        stateComponent="remoteDecks"
                    />
                </div>
                <div className="remote-deck-text-area">
                    <label>Extras:</label>
                    <TextareaAutosize 
                        className="remote-deck-text" 
                        name="extras" 
                        value={extras}
                        onChange={handleChange} 
                        onBlur={handleChange}
                        maxRows={10}
                    />
                </div>
            </div>
    )

}

export default RemoteDeck;