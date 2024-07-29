import { useState, useEffect } from "react"
import Note from "./components/Note"
import noteService from './services/notes'



const App = () => {
  const [notes, setNotes ] = useState([])
  const [newNote, setNewNote] = useState('a new note..')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const addNote = (event) =>{
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(retturnedNote => {
        setNotes(notes.concat(retturnedNote))
        setNewNote('')
      })


  }


  const toggleImportanceof = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      // eslint-disable-next-line no-unused-vars
      .catch(error => {
        alert(`the note '${note.content}' was alredy deleted from server`)
        setNotes(notes.filter(n => n.id !== id))
      })

    console.log(`importance of ${id} needs to be toggled`)
  }

  const handlNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)} >
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceof(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handlNoteChange}
        />
        <button type="submit"> save </button>
      </form>
    </div>
  )
}

export default App