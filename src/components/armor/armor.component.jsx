import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import './armor.styles.scss';

const Armor = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'armor',id);
    }

    const {showDelete} = props;

    return (
        // armor: [
        // {type: 'Secure Long Coat', balistics: '4', impact: '2'},
        
        <div className="armor-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Armor</h3>
            <table>
                <thead>
                <tr>
                    <th className='first-column'>Type</th>
                    <th>Balistics</th>
                    <th className={`${showDelete ? "minimized-width":""}`}>Impact</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.armor.map((item,index) => {
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
                                <td>
                                    <input 
                                        className="smaller-input"
                                        type="text" 
                                        value={item.balistics}
                                        name={"balistics"}
                                        id={`${index}-balistics`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":""}`}>
                                    <input 
                                        className="smaller-input"
                                        type="text" 
                                        value={item.impact}
                                        name={"impact"}
                                        id={`${index}-impact`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                {
                                    (showDelete && item.type !== "Total") &&
                                    <td>
                                        <DeleteLine 
                                            component="armor" 
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
                component="armor" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default Armor;