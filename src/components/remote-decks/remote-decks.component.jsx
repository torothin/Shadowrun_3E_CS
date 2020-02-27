import React from 'react';
import RemoteDeck from '../remote-deck/remote-deck.component';
import AddDelete from '../add-delete/add-delete.component';
import DeleteLine from '../delete-line/delete-line.component';

import './remote-decks.styles.scss';

const RemoteDecks = (props) => {

    const {showDelete} = props;

    return (
        <div className="remote-decks-container component-container-color" style={{order: `${props.style}`}}>
            <h3>Remote Decks</h3>
            <div className="subcomponent-container subcomponent-color remote-decks-box">
                {
                    props.remoteDecks.map((item,index)=> {
                        return (
                            <div>
                                <RemoteDeck 
                                    remoteDeck={item}
                                    key={index}
                                    remoteDeckIndex={index}
                                    onChange={props.onChange}
                                    updateCondition={props.updateCondition}
                                />
                                { 
                                    showDelete &&
                                    <DeleteLine 
                                        component="remoteDecks" 
                                        name={index} 
                                        deleteItem={props.deleteItem}
                                    />
                                }
                            </div>
                        )
                    })
                }
            </div>
            <AddDelete 
                component="remoteDecks" 
                addLine={props.addLine} 
                toggleDelete={props.toggleDelete} 
            />
        </div>
    )
}

export default RemoteDecks;