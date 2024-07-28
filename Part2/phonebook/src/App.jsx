import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('clicked', event.target)

    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is alredy added to phonebook`)
    }
    else{
      const nameObject = {
        name: newName
      }
      setPersons(persons.concat(nameObject))
        setNewName('')
      }
  }
  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {persons.map(p => <div key={p.name}> {p.name} </div>)}
      </div>
    </div>
   
  )
}

export default App