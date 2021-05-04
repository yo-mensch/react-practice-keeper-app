import React, {useState} from 'react';
import Header from '../src/Header'
import Footer from '../src/Footer'
import Note from '../src/Note'
import CreateArea from '../src/CreateArea'

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note){
        console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }

    return(
        <div>
            <Header/>
            <CreateArea
                onAdd ={addNote}
            />
            {notes.map((noteItem, index)=>{
                return <Note
                key = {index}
                id = {index}
                title={noteItem.title}
                content = {noteItem.content}
                onDelete ={deleteNote}
                />
            })}
            <Footer/>
        </div>
    )
}
export default App;