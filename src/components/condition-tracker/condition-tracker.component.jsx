import React from 'react'
import './condition-tracker.styles.scss'

const ConditionTracker = (props) => {
    const updateCondition = (e) => {
        const splitID = e.target.id.split('-');
        const damageAmount = Number(splitID[0]) + 1;
        const damageType = splitID[1];
        props.updateCondition(damageType, props.stateComponent, damageAmount, props.index, props.trackerName);
    }

    const stunTracker = props.conditionTracker.stunTracker;
    const physicalTracker = props.conditionTracker.physicalTracker;
    
    return(
        <div className="component-container">
            { 
                props.stun &&
                <div className={`stun container-${props.size}`}>
                    <div className={`stun-wrapper-${props.size}`}>
                        {
                            stunTracker.map((item,index)=>{
                                return (
                                    <div 
                                        className={`checkbox-${props.size}${item ? " checked" : ""}`} 
                                        id={`${index}-stun`}
                                        onClick={updateCondition}
                                        key={index}
                                    >
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            { 
                props.physical &&
                <div className={`physical container-${props.size}`}>
                    <div className={`physical-wrapper-${props.size}`}>
                        {
                            physicalTracker.map((item,index)=>{
                                return (
                                    <div 
                                    className={`checkbox-${props.size}${item ? " checked" : ""}`} id={`${index}-physical`}
                                    onClick={updateCondition}
                                    >
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default ConditionTracker;