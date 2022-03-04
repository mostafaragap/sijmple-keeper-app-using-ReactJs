/*import React from 'react' ; 
import Header from './Header' ;
import Footer from './Footer';
import Notes from './Note'
import notes from '../notes.js'


class App extends React.Component{
  render()
  {
    return <div><Header /> <div className='container mt-5'>
    <div className='row'> {notes.map(note =>(
        <Notes
      key={note.key}
      title={note.title}
      content={note.content}
    />
  
      ))} </div>
     </div> <Footer /></div>
  }
  
}

*/

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div><Header /> <div className='container mt-5'>
    <div className='row'>
    <CreateArea onAdd={addNote} />
    {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })} </div>
     </div> <Footer /></div>
  );
}

export default App;


