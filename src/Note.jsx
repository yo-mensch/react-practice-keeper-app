import React from 'react';

function Note(props){
    return(
        <div className="note">
            <h1>{props.name}</h1>
            <p>{props.content}</p>
            <button>DELETE</button>
        </div>
    )
}

export default Note;