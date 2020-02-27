import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';
import './adept-powers.styles.scss';

const AdeptPowers = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'adeptPowers',id);
    }

    const {showDelete} = props;

    return (
        <div className="adeptPowers-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Adept Powers</h3>
            <div className="subcomponent-container subcomponent-color">
            <table className='table-styling'>
                <thead>
                <tr>
                    <th className='first-column'>Abilities</th>
                    <th className='small-width'>Level</th>
                    <th className='small-width'>Cost</th>
                    <th className={`${showDelete ? "minimized-width":"large-width notes"}`}>Notes</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.adeptPowers.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    <input 
                                        className='first-input smaller-input' 
                                        type="text" 
                                        value={item.abilities}
                                        name={"abilities"}
                                        id={`${index}-abilities`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className="small-width">
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.level}
                                        name={"level"}
                                        id={`${index}-level`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className="small-width">
                                    <input 
                                        className='smaller-input' 
                                        type="text" 
                                        value={item.cost}
                                        name={"cost"}
                                        id={`${index}-cost`}
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
                                            component="adeptPowers" 
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
                component="adeptPowers" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
            
        </div>
    )
}

export default AdeptPowers;