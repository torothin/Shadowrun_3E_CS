import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';
import './programs.styles.scss';

const Programs = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'programs',id);
    }

    const {showDelete} = props;
    
    return (
        <div className="programs-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Programs</h3>
            <div className="subcomponent-container subcomponent-color">
            <table className='table-styling'>
                <thead>
                <tr>
                    <th className='first-column'>Type</th>
                    <th className='small-width'>Rating</th>
                    <th className='small-width'>Size</th>
                    <th className='small-width'>Active</th>
                    <th className={`${showDelete ? "minimized-width":""}`}>Notes</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.programs.map((item,index) => {
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
                                        value={item.rating}
                                        name={"rating"}
                                        id={`${index}-rating`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className="small-width">
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
                                <td className="small-width">
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.active}
                                        name={"active"}
                                        id={`${index}-active`}
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
                                            component="programs" 
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
                component="programs" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
            
        </div>
    )
}

export default Programs;