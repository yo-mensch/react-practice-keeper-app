import React from 'react';
import Header from '../src/Header'
import Footer from '../src/Footer'
import Note from '../src/Note'

function App(){
    return(
        <div>
            <Header/>
            <Note name = "Note 1" content = "This is the content of Note 1"/>
            <Note name = "Note 2" content = "Eins Zwei Polizei"/>
            <Note name = "Note 3" content = "Drei Vier Grenadier"/>
            <Note name = "Note 4" content = "Fünf Sechs, Alte Hex"/>
            <Note name = "Note 5" content = "Sieben Acht, Gutenacht"/>
            <Footer/>
        </div>
    )
}
export default App;