import React from 'react'

import './attributes.styles.scss';

const Attributes = (props) => {
    // const { body, quickness, strength, charisma, intelligence, 
    //     willpower, essence, magic, reaction, initiative
    //   } = props.attributes;
    //const attributes = props.attributes;

    // const handleChange = (e) => {
    //     const type = e.target.name;
    //     const value = e.target.value;
    //     props.onChange(type,value,'attributes');
    // }

    const handleChange = (e) => {
        const type = e.target.name;
        const value = Number(e.target.value);
        const id = Number(e.target.id)
        // if(value)
        // {
        //     props.onChange(type,value,'attributes',id);
        // }
        // else
        // {
        //     console.log("input error",value);
        // }
        props.onChange(type,value,'attributes',id);
        
    }
    
    return (
        <div className='attributes-container component-container-color' style={{order: `${props.style}`}}>
            <h3>Attributes</h3>
            <div className='base-attributes'>
                <table>
                    <thead>
                        <tr>
                            <th className='first-header'>Attribute</th>
                            <th className='header'>Total</th>
                            <th className='header'>Mod</th>
                            <th className='header'>Base</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    props.attributes.map((item,index)=>{
                        if(item.name === "Essence" || item.name === "Magic") {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="label-container">{item.name}:</div>
                                    </td>
                                    <td>
                                        <div className='mock-input total-box'>{item.total}</div>
                                    </td>
                                </tr>
                            )
                        }
                        if(item.name === "Initiative") {
                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="label-container">{item.name}:</div>
                                    </td>
                                    <td>
                                        <div className='total-box mock-input'>{item.main}+{item.total}d6</div>
                                    </td>
                                    <td>
                                        <input 
                                            type="text"
                                            id={index}
                                            name={"mod"}
                                            value={item.mod}
                                            onChange={handleChange}
                                            onBlur={handleChange}
                                            autocomplete="off"
                                        />
                                    </td>
                                    <td>
                                        {/* <div className="initiative-container"> */}
                                        <div className='mock-input'>1d6</div>
                                        {/* </div> */}
                                    </td>
                                </tr>
                            )
                        }
                        return(
                            <tr key={index}>
                                <td>
                                    <div className="label-container">{item.name}:</div>
                                </td>
                                <td>
                                    <div className='mock-input total-box'>{item.total}</div>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id={index}
                                        name={"mod"}
                                        value={item.mod}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        autocomplete="off"
                                    />
                                </td>
                                <td>
                                {
                                    item.name === "Reaction" 
                                    ? 
                                    (
                                        <div className='mock-input'>{item.base}</div>
                                    )
                                    :
                                    (
                                        <input 
                                            type="text"
                                            id={index}
                                            name={"base"}
                                            value={item.base}
                                            onChange={handleChange}
                                            onBlur={handleChange}
                                            autocomplete="off"
                                        />
                                    )
                                }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}

export default Attributes;