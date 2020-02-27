import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import './cyberware.styles.scss';

const Cyberware = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'cyberware',id);
    }

    const {showDelete} = props;

    return (
        <div className="cyberware-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Cyberware</h3>
            <table>
                <thead>
                    <tr>
                        <th className='first-column'>Type</th>
                        <th>Rating</th>
                        <th className={`${showDelete ? "minimized-width":""}`}>Rank</th>
                        {
                            showDelete &&
                            <th className='small-width'>Delete</th>
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    props.cyberware.map((item, index) => {
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
                                <td>
                                    <input 
                                        className="smaller-input"
                                        id={`${index}-rating`}
                                        type="text" 
                                        name="rating"
                                        value={item.rating}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":""}`}>
                                    <input 
                                        className="smaller-input"
                                        id={`${index}-rank`}
                                        type="text" 
                                        name="rank"
                                        value={item.rank} 
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="cyberware" 
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
                component="cyberware" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default Cyberware;