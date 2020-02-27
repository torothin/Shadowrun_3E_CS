import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';

import './spells.styles.scss';

const Spells = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'spells',id);
    }

    const {showDelete} = props;
    
    return (
        <div className="spells-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Spells</h3>
            <div className="subcomponent-container subcomponent-color">
            <table className='table-styling'>
                <thead>
                    <tr>
                        <th className='first-column'>Name</th>
                        <th className='small-width'>Force</th>
                        <th className='small-width'>Damage</th>
                        <th className='small-width'>Duration</th>
                        <th className='small-width'>Type</th>
                        <th className='small-width'>Target</th>
                        <th className='small-width'>Resist</th>
                        <th className='small-width'>Range</th>
                        <th className='small-width'>Drain</th>
                        <th className={`${showDelete ? "minimized-width":"large-width notes"}`}>Notes</th>
                        {
                            showDelete &&
                            <th className='small-width'>Delete</th>
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    props.spells.map((item,index) => {
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
                                        value={item.force}
                                        name={"force"}
                                        id={`${index}-force`}
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
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.duration}
                                        name={"duration"}
                                        id={`${index}-duration`}
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
                                        value={item.target}
                                        name={"target"}
                                        id={`${index}-target`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.resist}
                                        name={"resist"}
                                        id={`${index}-resist`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.range}
                                        name={"range"}
                                        id={`${index}-range`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='small-width'>
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.drain}
                                        name={"drain"}
                                        id={`${index}-drain`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":"large-width notes"}`}>
                                    
                                    <TextareaAutosize 
                                        className='notes' 
                                        type="text" 
                                        value={item.notes}
                                        name={"notes"}
                                        id={`${index}-notes`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                        minRows={1}
                                        maxRows={10}
                                    />
                                    
                                </td>
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="spells" 
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
                component="spells" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
            
        </div>
    )
}

export default Spells;