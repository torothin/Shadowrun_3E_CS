import React from 'react';
import Vehicle from '../vehicle/vehicle.component';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';

import './vehicles.styles.scss';

const Vehicles = (props) => {

    const {showDelete} = props;

    return (
        <div className="vehicles-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Vehicles</h3>
            <div className="subcomponent-container subcomponent-color vehicle-box">
                {
                    props.vehicles.map((item,index)=> {
                        return (
                            <div>
                                <Vehicle 
                                    vehicleIndex={index}
                                    vehicle={item}
                                    key={index}
                                    onChange={props.onChange}
                                    updateCondition={props.updateCondition}
                                />
                                { 
                                    showDelete &&
                                    <DeleteLine 
                                        component="vehicles" 
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
                component="vehicles" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default Vehicles;