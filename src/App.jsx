import React from 'react';
import Header from '../src/Header'
import Footer from '../src/Footer'
import Note from '../src/Note'
import CreateArea from '../src/CreateArea'

import notes from '../src/notes'

function App(){
    return(
        <div>
            <Header/>
            <CreateArea/>
            {notes.map(note => <Note
                key = {note.id}
                name = {note.name}
                content = {note.content}
            />)}
            <Footer/>
        </div>
    )
}
export default App;