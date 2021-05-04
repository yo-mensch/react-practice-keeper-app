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

    return(
        <div>
            <Header/>
            <CreateArea
                onAdd ={addNote}
            />
            {notes.map((noteItem)=>{
                return <Note
                title={noteItem.title}
                content = {noteItem.content}
                />
            })}
            <Footer/>
        </div>
    )
}
export default App;