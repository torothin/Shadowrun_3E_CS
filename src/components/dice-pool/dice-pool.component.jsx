import React from 'react';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';
import './dice-pool.styles.scss';

const DicePool = (props) => {
    
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const splitID = e.target.id.split('-');
        const id = Number(splitID[0]);
        props.onChange(type,value,'dicePool',id);
    }

    const {showDelete} = props;

    return (
        <div className='dice-pool-container component-container-color' style={{order: `${props.style}`}}>
            <h3>Dice Pool</h3>
            <table>
            <thead></thead>
            <tbody>
                {
                    
                    props.dicePool.map( (item,index) => {
                        return (
                            <tr key={index}>
                                <td className='first-column'>
                                    {
                                        (item.type === "Combat" || item.type === "Astral Combat" || item.type === "Spell"
                                        || item.type === "Hacking" || item.type === "Control")
                                        ?
                                        <div className='mock-smaller-input first-input '>{item.type}</div>
                                        :
                                        <input 
                                            className='first-input smaller-input' 
                                            name="type"
                                            type="text" 
                                            value={item.type}
                                            id={`${index}-type`}
                                            onChange={handleChange} 
                                            onBlur={handleChange}
                                            autocomplete="off"
                                        />
                                    }
                                </td>
                                <td>
                                  <span>pool</span>
                                </td>
                                <td className={`${showDelete ? "minimized-width":""}`}>
                                    {
                                        (item.type === "Combat" || item.type === "Astral Combat" || item.type === "Spell")
                                        ?
                                        <div className='mock-smaller-input'>{item.value}</div>
                                        :
                                        <input 
                                            className='smaller-input' 
                                            type="number" 
                                            value={item.value}
                                            name="value"
                                            id={`${index}-value`}
                                            onChange={handleChange} 
                                            onBlur={handleChange}
                                            autocomplete="off"
                                        />
                                    }
                                    
                                </td>
                                {
                                    (
                                        showDelete && 
                                        item.type !== "Combat" && 
                                        item.type !== "Astral Combat" &&
                                        item.type !== "Spell" &&
                                        item.type !== "Hacking" &&
                                        item.type !== "Control"
                                    ) &&
                                    <td>
                                        <DeleteLine 
                                            component="dicePool" 
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
                component="dicePool" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />

        </div>
    )
}

export default DicePool;