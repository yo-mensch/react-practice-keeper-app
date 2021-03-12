import React from 'react';
import Header from '../src/Header'
import Footer from '../src/Footer'
import Note from '../src/Note'

import notes from '../src/notes'

function App(){
    return(
        <div>
            <Header/>
            {notes.map(note => <Note
                name = {note.name}
                content = {note.content}
            />)}
            <Footer/>
        </div>
    )
}
export default App;