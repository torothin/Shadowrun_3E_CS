import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import './character-info.styles.scss';

const CharacterInfo = (props) => {

    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        props.onChange(type,value,'character');
    }
    
    const { name, age, sex, race, description, notes, personality } = props.characterData;
    const baseInputs = {'name': name, 'age': age, 'sex': sex, 'race': race};
    const textAreaInputs = {'description':description, 'notes':notes, 'personality':personality};

    return (
        <div className="character-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Character Information</h3>
            <div className="subcomponent-container subcomponent-color">
                <form>
                    <div className='container-1'>
                        {
                            Object.entries(baseInputs).map(([key, value]) => {
                                if(key==="name") {
                                    return (
                                        <div key={key} className="sub-container name">
                                            <label>{key}:</label>
                                            <input 
                                                className="sub-container-input"
                                                type="text" 
                                                name={key} 
                                                value={value} 
                                                onChange={handleChange} 
                                                onBlur={handleChange}
                                                autocomplete="off"
                                            />
                                        </div>
                                    )
                                }
                                return (
                                    <div key={key} className="sub-container">
                                        <label>{key}:</label>
                                        <input 
                                            className="sub-container-input"
                                            type="text" 
                                            name={key} 
                                            value={value} 
                                            onChange={handleChange} 
                                            onBlur={handleChange}
                                            autocomplete="off"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='container-2'>
                    {
                            Object.entries(textAreaInputs).map(([key, value]) => {
                                return (
                                    <div key={key} className='sub-container full-width'>
                                        <label>{key}:</label>
                                        <TextareaAutosize 
                                            type="text" 
                                            name={key} 
                                            value={value} 
                                            onChange={handleChange} 
                                            onBlur={handleChange}
                                            maxRows={10}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}


export default CharacterInfo;
