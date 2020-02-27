import React from 'react';
import Drone from '../drone/drone.component';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';

import './drones.styles.scss';

const Drones = (props) => {
    
    const {showDelete} = props;

    return (
        <div className="drones-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Drones</h3>
            <div className="subcomponent-container subcomponent-color drone-box">
                {
                    props.drones.map((item,index)=> {
                        return (
                            <div>
                                <Drone 
                                    drone={item}
                                    droneIndex={index}
                                    key={index}
                                    onChange={props.onChange}
                                    updateCondition={props.updateCondition}
                                />
                                { 
                                    showDelete &&
                                    <DeleteLine 
                                        component="drones" 
                                        name={index} 
                                        deleteItem={props.deleteItem}
                                    />
                                }
                            </div>
                        )
                    })
                }
            </div>
            <AddDelete 
                component="drones" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default Drones;