import React from 'react'
import './condition-monitor.styles.scss'
import ConditionTracker from '../condition-tracker/condition-tracker.component';


const ConditionMonitor = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        props.onChange(type,value,'condition');
    }
    
    return(
        <div className='condition-container component-container-color' style={{order: `${props.style}`}}>
            <h3>Condition Monitor</h3>
            <div className="subcomponent-container subcomponent-color">
                <div className="subcomponent-color">
                    <ConditionTracker 
                        conditionTracker={props.condition}
                        updateCondition={props.updateCondition}
                        trackerName="condition"
                        stun={true}
                        physical={true}
                        size={'large'}
                        stateComponent="condition"
                    />

                </div>
                <h3>Damage Overflow</h3>
                <input 
                    type="text" 
                    className="overflow"
                    value={props.condition.overflow}
                    name="overflow"
                    onChange={handleChange} 
                    onBlur={handleChange}
                    componentype="condition"
                    autocomplete="off"
                />
            </div>
        </div>
    )
}

export default ConditionMonitor;
