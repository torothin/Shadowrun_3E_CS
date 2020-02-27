import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';
import './weapons.styles.scss';

const Weapons = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'weapons',id);
    }

    const {showDelete} = props;
    
    return (
        <div className="weapons-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Weapons</h3>
            <div className="subcomponent-container subcomponent-color">
            <table className='table-styling'>
                <thead>
                <tr>
                    <th className='first-column'>Name</th>
                    <th className='small-width'>Type</th>
                    <th className='small-width'>Conceal</th>
                    <th className='small-width'>Reach</th>
                    <th className='small-width'>Mode</th>
                    <th className='small-width'>Ammo</th>
                    <th className='small-width'>Short</th>
                    <th className='small-width'>Medium</th>
                    <th className='small-width'>Long</th>
                    <th className='small-width'>Extreme</th>
                    <th className='small-width'>Damage</th>
                    <th className={`${showDelete ? "minimized-width":"large-width"}`}>Modifiers</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.weapons.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    <input 
                                        className='first-input smaller-input' 
                                        type="text" 
                                        value={item.name}
                                        name={"name"}
                                        id={`${index}-name`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.type}
                                        name={"type"}
                                        id={`${index}-type`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.concealability}
                                        name={"concealability"}
                                        id={`${index}-concealability`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />    
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.reach}
                                        name={"reach"}
                                        id={`${index}-reach`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.mode}
                                        name={"mode"}
                                        id={`${index}-mode`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.ammo}
                                        name={"ammo"}
                                        id={`${index}-ammo`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.short}
                                        name={"short"}
                                        id={`${index}-short`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.medium}
                                        name={"medium"}
                                        id={`${index}-medium`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.long}
                                        name={"long"}
                                        id={`${index}-long`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.extreme}
                                        name={"extreme"}
                                        id={`${index}-extreme`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.damage}
                                        name={"damage"}
                                        id={`${index}-damage`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":"large-width notes"}`}>
                                    <TextareaAutosize 
                                        className='notes' 
                                        type="text"
                                        value={item.modifiers}
                                        name={"modifiers"}
                                        wrap='off'
                                        id={`${index}-modifiers`}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        minRows={1}
                                        maxRows={10}
                                    />
                                </td>
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="weapons" 
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
            <AddDelete 
                component="weapons" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
            
        </div>
    )
}

export default Weapons;