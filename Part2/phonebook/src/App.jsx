import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('clicked', event.target)

// persons.some(e => e.name === newName
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is alredy added to phonebook`)
    }
    else{
      const nameObject = {
        name: newName,
        number: newNum,
        id: String(persons.length + 1)
      }
      setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNum('')
      }
  }

  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    setNewNum(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: 
          <input 
            value={newName}
            onChange={handleNewName}/>
        </div>
        <div>Number: 
          <input
            value={newNum}
            onChange={handleNewNum} 
            />
        </div>        
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {persons.map(p => <div key={p.id}> {p.name}: {p.number} </div>)}
      </div>
    </div>
   
  )
}

export default App