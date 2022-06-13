import React from 'react';

const AddEvent = (props) => {
    return(
        <div>
            {
                props.editable ?
                 <input type="text" defaultValue={props.item.item} onKeyPress={(e)=>props.onKeyPress(e, props.index)}/> :
                 <h1 onDoubleClick={props.onDoubleClick} >{props.item.item}</h1>
            }
            
            <h1>{props.item.calories}</h1>
            <button onClick={props.onClick} name={props.item.item}>Delete Item</button>
        </div>
    )
}

export default AddEvent;