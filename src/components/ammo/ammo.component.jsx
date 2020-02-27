import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import './ammo.styles.scss';

const Ammo = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'ammo',id);
    }

    const {showDelete} = props;
    
    return (
        <div className="ammo-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Ammo</h3>
            <div className="subcomponent-container subcomponent-color">
                <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th className='first-column'>Type</th>
                    <th className='small-width'>Form</th>
                    <th className={`${showDelete ? "minimized-width":"large-width notes"}`}>Rounds</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.ammo.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    <input 
                                        className='first-input smaller-input' 
                                        type="text" 
                                        value={item.type}
                                        name={"type"}
                                        id={`${index}-type`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className="small-width">
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.form}
                                        name={"form"}
                                        id={`${index}-form`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":"large-width notes"}`}>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.rounds}
                                        name={"rounds"}
                                        id={`${index}-rounds`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="ammo" 
                                            name={index} 
                                            deleteItem={props.deleteItem}
                                        />
                                    </td>
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot></tfoot>

            </table>
            </div>
            </div>
            <AddDelete 
                component="ammo" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
            
        </div>
    )
}

export default Ammo;