import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import TextareaAutosize from 'react-textarea-autosize';
import './magic-items.styles.scss';

const MagicItems = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'magicItems',id);
    }

    const {showDelete} = props;

    return (
        <div className="magic-items-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Magic Items</h3>
            <table>
                <thead>
                <tr>
                    <th className='first-column'>Item</th>
                    <th className='middle-column'>Rating</th>
                    <th className={`${showDelete ? "minimized-width":"large-width"}`}>Description</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.magicItems.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    <input 
                                        className='first-input smaller-input'
                                        id={`${index}-item`}
                                        type="text"
                                        name="item" 
                                        value={item.item}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className='middle-column'>
                                    <input 
                                        className="smaller-input"
                                        type="text" 
                                        value={item.rating}
                                        name="rating"
                                        id={`${index}-rating`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":"large-width"}`}>
                                    <TextareaAutosize 
                                        className='notes' 
                                        type="text" 
                                        value={item.description}
                                        name="description"
                                        id={`${index}-description`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        minRows={1}
                                        maxRows={10}
                                        autocomplete="off"
                                    />
                                </td>
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="magicItems" 
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
                component="magicItems" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default MagicItems;