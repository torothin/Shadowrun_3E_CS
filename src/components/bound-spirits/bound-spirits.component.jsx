import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';
import './bound-spirits.styles.scss';

const BoundSpirits = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'boundSpirits',id);
    }

    const {showDelete} = props;
    
    return (
        <div className="bound-spirits-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Bound Spirits</h3>
            <table>
                <thead>
                    <tr>
                        <th className='first-column'>Type</th>
                        <th className='middle-column'>Force</th>
                        <th className={`${showDelete ? "minimized-width":"large-width"}`}>Notes</th>
                        {
                            showDelete &&
                            <th className='small-width'>Delete</th>
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    props.boundSpirits.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    <input 
                                        className='first-input smaller-input'
                                        id={`${index}-type`}
                                        type="text"
                                        name="type" 
                                        value={item.type}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='middle-column'>
                                    <input 
                                        className="smaller-input"
                                        type="text" 
                                        value={item.force}
                                        name="force"
                                        id={`${index}-force`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":"large-width"}`}>
                                    <TextareaAutosize 
                                        className="text-area"
                                        type="text" 
                                        name="notes"
                                        id={`${index}-notes`}
                                        value={item.notes}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        maxRows={10}
                                    />  
                                </td>
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="boundSpirits" 
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
            <AddDelete 
                component="boundSpirits" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default BoundSpirits;