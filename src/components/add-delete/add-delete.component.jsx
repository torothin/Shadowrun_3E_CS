import React from 'react'
import AddLine from '../add-line/add-line.component';
import DeleteButton from '../delete-button/delete-button.component';
import './add-delete.styles.scss'

const AddDelete = (props) => {

    return (
        <div className="button-container">
            <AddLine 
                addLine={props.addLine} 
                component={props.component}
            />
            <DeleteButton
                toggleDelete={props.toggleDelete}
                component={props.component}
            />
        </div>
    )
}

export default AddDelete