import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './cyberdeck.styles.scss';
import ConditionTracker from '../condition-tracker/condition-tracker.component';


const Cyberdeck = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        //const id = Number(e.target.id)
        props.onChange(type,value,'cyberdeck');
    }

    const {
        mcpc,asist,hardening,iccm,response,reality,io,caseVar,memory,
        ports,storage,hjacks,detectionFactor,iconRating,bandwidth,
        bod,evasion,masking,sensors,extras,realityFilter,deckerIcon,
    } = props.cyberdeck;
    
    return (
        <div className="cyberdeck-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Cyberdeck</h3>
            <div className="subcomponent-container subcomponent-color">
                <div className="stat-container" >
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td>MCPC</td><td><input className="cyberdeck-input" type="text" value={mcpc} name="mcpc" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>ASIST</td><td><input className="cyberdeck-input" type="text" value={asist} name="asist" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Hardening</td><td><input className="cyberdeck-input" type="text" value={hardening} name="hardening" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>ICCM</td><td><input className="cyberdeck-input" type="text" value={iccm} name="iccm" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Response</td><td><input className="cyberdeck-input" type="text" value={response} name="response" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Reality</td><td><input className="cyberdeck-input" type="text" value={reality} name="reality" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>I/O</td><td><input className="cyberdeck-input" type="text" value={io} name="io" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Case</td><td><input className="cyberdeck-input" type="text" value={caseVar} name="caseVar" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Memory</td><td><input className="cyberdeck-input" type="text" value={memory} name="memory" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Ports</td><td><input className="cyberdeck-input" type="text" value={ports} name="ports" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Storage</td><td><input className="cyberdeck-input" type="text" value={storage} name="storage" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>H. Jacks</td><td><input className="cyberdeck-input" type="text" value={hjacks} name="hjacks" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Detection Factor</td><td><input className="cyberdeck-input" type="text" value={detectionFactor} name="detectionFactor" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Icon Rating</td><td><input className="cyberdeck-input" type="text" value={iconRating} name="iconRating" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Bandwidth</td><td><input className="cyberdeck-input" type="text" value={bandwidth} name="bandwidth" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        <tr>
                            <td>Bod</td><td><input className="cyberdeck-input" type="text" value={bod} name="bod" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Evasion</td><td><input className="cyberdeck-input" type="text" value={evasion} name="evasion" onChange={handleChange} onBlur={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td>Masking</td><td><input className="cyberdeck-input" type="text" value={masking} name="masking" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                            <td>Sensors</td><td><input className="cyberdeck-input" type="text" value={sensors} name="sensors" onChange={handleChange} onBlur={handleChange} autocomplete="off"></input></td>
                        </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            
                <div className="cyberdeck-condition-monitor">
                    <ConditionTracker 
                        conditionTracker={props.cyberdeck[0].condition}
                        updateCondition={props.updateCondition}
                        trackerName="condition"
                        stun={false}
                        physical={true}
                        size={'small'}
                        index={0}
                        stateComponent="cyberdeck"
                    />
                </div>
                <div className="cyberdeck-text-area">
                    <label>Extras:</label>
                    <TextareaAutosize className="cyberdeck-text" name="extras" value={extras} maxRows={10}/>
                </div>
                <div className="cyberdeck-text-area">
                    <label>Reality Filter:</label>
                    <TextareaAutosize className="cyberdeck-text" name="realityFilter" value={realityFilter} maxRows={10}/>
                </div>
                <div className="cyberdeck-text-area">
                    <label>Decker Icon:</label>
                    <TextareaAutosize className="cyberdeck-text" name="deckerIcon" value={deckerIcon} maxRows={10}/>
                </div>
                
            </div>
        </div>
    )

}

export default Cyberdeck