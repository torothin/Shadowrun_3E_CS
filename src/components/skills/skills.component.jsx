import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import './skills.styles.scss';

const Skills = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'skills',id);
    }

    
    const {showDelete} = props;
    
    return (
        <div className="skills-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Skills</h3>
            <table>
                <thead>
                <tr>
                    <th className='first-column'>Name</th>
                    <th>Stat</th>
                    <th className={`${showDelete ? "minimized-width":""}`}>Rating</th>
                    {
                        showDelete &&
                        <th className='small-width'>Delete</th>
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.skills.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    <input 
                                        className='first-input smaller-input'
                                        id={`${index}-name`}
                                        type="text"
                                        name="name" 
                                        value={item.name}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td>
                                    <input 
                                        className="smaller-input"
                                        type="text" 
                                        value={item.stat}
                                        name="stat"
                                        id={`${index}-stat`}
                                        onChange={handleChange} 
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td className={`${showDelete ? "minimized-width":""}`}>
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
                                {
                                    showDelete &&
                                    <td>
                                        <DeleteLine 
                                            component="skills" 
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
                component="skills" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default Skills;