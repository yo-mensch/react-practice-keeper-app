import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            };
        });
    };

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} 
        value={note.title} 
        name="title"
        autoComplete="off" 
        placeholder="Title" 
        />
        <textarea onChange={handleChange} 
        value={note.content} 
        name="content"
        autoComplete="off" 
        placeholder="Take a note..." rows="3" 
        />
        <Fab onClick={submitNote}><AddIcon/></Fab>
      </form>
    </div>
  );
};

export default CreateArea;
