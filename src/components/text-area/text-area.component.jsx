import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './text-area.styles.scss';

const TextArea = (props) => {
    const handleChange = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        console.log('data',value,type);
        
        props.onChange('data',value,type);
    }

    return (
        //equipment: {title: "Equipment", data: ""},
        <div className="text-area-container component-container-color" style={{order: `${props.style}`}}>
            <h3>{props.title}</h3>
            <TextareaAutosize 
                value={props.data}
                name={props.id}
                wrap='off'
                onChange={handleChange}
                onBlur={handleChange}
                minRows={2}
                maxRows={10}
            />

        </div>
    )
}

export default TextArea;