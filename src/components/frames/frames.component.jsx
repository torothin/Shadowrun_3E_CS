import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';
import './frames.styles.scss';

const Frames = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'frames',id);
    }
    
    const {showDelete} = props;
    
    return (
        <div className="frames-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Frames/Sprites</h3>
            <div className="subcomponent-container subcomponent-color">
                <table className='table-styling'>
                    <thead>
                        <tr>
                            <th className='first-column'>Name</th>
                            <th className='small-width'>Size</th>
                            <th className='small-width'>Core</th>
                            <th className='small-width'>Pilot</th>
                            <th className='small-width'>B/E/M/S</th>
                            <th className='large-width'>Programs</th>
                            <th className={`${showDelete ? "minimized-width":"large-width"}`}>Notes</th>
                            {
                                showDelete &&
                                <th className='small-width'>Delete</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.frames.map((item,index) => {
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
                                                value={item.size}
                                                name={"size"}
                                                id={`${index}-size`}
                                                onChange={handleChange} 
                                                onBlur={handleChange}
                                                autocomplete="off"
                                            />
                                        </td>
                                        <td className='small-width'>
                                            <input 
                                                className='smaller-input' 
                                                type="text" 
                                                value={item.core}
                                                name={"core"}
                                                id={`${index}-core`}
                                                onChange={handleChange} 
                                                onBlur={handleChange}
                                                autocomplete="off"
                                            />
                                        </td>
                                        <td className='small-width'>
                                            <input 
                                                className='smaller-input' 
                                                type="text" 
                                                value={item.pilot}
                                                name={"pilot"}
                                                id={`${index}-pilot`}
                                                onChange={handleChange} 
                                                onBlur={handleChange}
                                                autocomplete="off"
                                            />
                                        </td>
                                        <td className='small-width'>
                                            <input 
                                                className='smaller-input' 
                                                type="text" 
                                                value={item.bems}
                                                name={"bems"}
                                                id={`${index}-bems`}
                                                onChange={handleChange} 
                                                onBlur={handleChange}
                                                autocomplete="off"
                                            />
                                        </td>
                                        <td className='large-width'>
                                            <input 
                                               className='smaller-input' 
                                                type="text" 
                                                value={item.programs}
                                                name={"programs"}
                                                id={`${index}-programs`}
                                                onChange={handleChange} 
                                                onBlur={handleChange}
                                                autocomplete="off"
                                            />
                                        </td>
                                        <td className={`${showDelete ? "minimized-width":"large-width"}`}>
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
                                                    component="frames" 
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
                component="frames" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )

}

export default Frames;