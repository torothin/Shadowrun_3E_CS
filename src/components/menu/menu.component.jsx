import React from 'react';
import FileDialogue from '../file-dialogue/file-dialogue.component';
import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import MenuItem from '../menu-item/menu-item.component';
import './menu.styles.scss';

const Menu = (props) => {
    

    const onDragEnd = (result) => {
        const {destination, source, draggableId} = result;

        // if dragged outside of list
        if(!destination) return null;

        //if dragged to the same spot it started
        if(destination.droppableId === source.droppableId &&
            destination.index === source.index) return;

        const column = props.menuData.columns[source.droppableId];
        const newMenuIds = [...column.menuIds];
        newMenuIds.splice(source.index,1);
        newMenuIds.splice(destination.index,0,draggableId);
        const newColumn = {...column, menuIds: newMenuIds}

        const newMenuData = {
            ...props.menuData,
            columns: {
                ...props.menuData.columns,
                [newColumn.id]: newColumn,
            }
        }


        props.updateMenu({...newMenuData});

    }

    
        return (
            <div className="main-container">
                <div className="menu-background">
                    <div className="menu-container-top"></div>
                    <div className="menu-container">
                        <FileDialogue
                            saveCharacter={props.saveCharacter} 
                            loadCharacter={props.loadCharacter}
                            resetData={props.resetData}
                        />
                        
                        <div className="dragBackground">
                            Toggle to show or hide components.<br/>Drag Items to arrange sheet.
                        <DragDropContext
                            // onDragStart
                            // onDragUpdate
                            onDragEnd={onDragEnd}
                        >
                            {
                                
                                props.menuData.columnOrder.map((columnID,index)=>{
                                    const column = props.menuData.columns[columnID];
                                    const menuItems = column.menuIds.map((menuItem)=>{
                                        return props.menuData.components[menuItem];
                                    })
                                    return (
                                        <Droppable key={index} droppableId={column.id}>
                                            {
                                                (provided)=>{
                                                    
                                                    return (
                                                        <div 
                                                            //innerRef={provided.innerRef}
                                                            ref={provided.innerRef}
                                                            {...provided.droppableProps} 
                                                            className="menuItems-container" 
                                                            key={column.id} 
                                                        >
                                                            {
                                                                menuItems.map((menuItem,index)=>{
                                                                    return (
                                                                        <MenuItem 
                                                                            menuItem={menuItem} 
                                                                            index={index} 
                                                                            toggleComponent={props.toggleComponent}
                                                                            components={props.components}
                                                                            key={index}
                                                                        />
                                                                       
                                                                    )
                                                                })
                                                            }
                                                            {provided.placeholder}

                                                        </div>
                                                    )
                                                }
                                            }
                                            
                                        </Droppable>
                                    )
                                })
                            }
                        </DragDropContext>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Menu;