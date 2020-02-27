import React from 'react';
import './menu-item.styles.scss';
import {Draggable} from 'react-beautiful-dnd';

const MenuItem = (props) => {

    const {key, id, title, visible} = props.menuItem;

    const toggleComponent = (e) => {
        props.menuItem.visible = !props.menuItem.visible;
        props.toggleComponent(id,props.menuItem);
    }

    return (
        <Draggable
            draggableId={id}
            index={props.index}
        >
            {(provided)=>{
                return (
                    <div 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        ref={provided.innerRef}
                        className="check-container"
                        id={key}
                    >
                        <button onClick={toggleComponent} className="button-container">
                            <input 
                                type="checkbox" 
                                className="toggle-input mod-checkbox"
                                name={key}
                                id={key}
                                style={{display:"none"}}
                                checked={visible}
                                autocomplete="off"
                                    
                            />
                            <label 
                                for="mod-checkbox" 
                                className="toggle"
                                id={key}
                                >
                                <span id={key}></span>
                            </label>  
                            </button>
                        
                        <div className="btn-label">{title}</div>
                            
                    </div>
                )
            }}
            
        </Draggable>
    )
}

export default MenuItem;

                                                                                