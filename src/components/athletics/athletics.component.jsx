import React from 'react';

import './athletics.styles.scss';

const Athletics = (props) => {
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        props.onChange(type,value,'athletics');
    }

    return (
        <div className="athletics-container component-container-color" style={{order: `${props.style}`}}>
             <h3>Athletics</h3>
            <table>
                <thead></thead>
                <tbody>
            {
                Object.entries(props.athletics).map(([key, value]) => {
                    if(key === 'multiplier') {
                        return (
                            <tr key={key}>
                            <td className="first-column">
                                <div className="first-input mock-smaller-input">{value.title}</div>
                            </td>

                            <td>
                                <input 
                                    type="number"
                                    className="smaller-input"
                                    id={key}
                                    name={key}
                                    value={value.value}
                                    onChange={handleChange}
                                    onBlur={handleChange}
                                    autocomplete="off"
                                />
                            </td>

                            <td className="last-column">
                                <div className="mock-smaller-input">{value.unit}</div>
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
                                <div className="mock-smaller-input">{value.value}</div>
                            </td>

                            <td className="last-column">
                                <div className="mock-smaller-input">{value.unit}</div>
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

export default Athletics;