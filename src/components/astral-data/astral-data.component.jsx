import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './astral-data.styles.scss';

const AstralData = (props) => {
    const handleChange = (e) => {
        const type = e.target.id;
        const value = e.target.value;
        props.onChange(type,value,'astralData');
    }

    return (
        <div className="astral-data-container component-container-color" style={{order: `${props.style}`}}>
             <h3>Astral Data</h3>
            <table>
                <thead></thead>
                <tbody>
            {
                Object.entries(props.astralData).map(([key, value]) => {
                    if(key==="appearance") {
                        return (
                            <tr key={key}>
                            <td className="first-column">
                                <div className="first-input mock-smaller-input">{value.title}</div>
                            </td>
                            <td>
                                <TextareaAutosize 
                                    type="text" 
                                    name={key} 
                                    id={key}
                                    value={value.value} 
                                    onChange={handleChange} 
                                    onBlur={handleChange}
                                    maxRows={10}
                                />
                            </td>
                        </tr>
                        )
                    }
                    
                    return (
                        <tr key={key}>
                        <td className="first-column">
                            <div className="first-input mock-smaller-input">{value.title}</div>
                        </td>
                        <td>
                            <input 
                                type="text"
                                className="smaller-input"
                                id={key}
                                name={key}
                                value={value.value}
                                onChange={handleChange}
                                onBlur={handleChange}
                                autocomplete="off"
                            />
                        </td>
                    </tr>
                    )
                })
            }
            </tbody>
            <tfoot></tfoot>
            </table>
        </div>
    )
}

export default AstralData;