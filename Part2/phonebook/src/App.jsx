import { useState } from 'react'
import Search from './components/Search'
import AddNew from './components/AddNew'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [find, setFind] = useState('')

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

  const handlFind = (event) => {
    setFind(event.target.value)
  }
  

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(find.toLowerCase())
  )

  return (
    <div>
      
      <h2>Phonebook</h2>
      <Search find={find} handle={handlFind}/>
      <h2>Add a new</h2>
      <AddNew addName={addName} newName={newName} newNum={newNum} handleNewName={handleNewName} handleNewNum={handleNewNum}/>
      <h2>Numbers</h2>
      <Persons content={personsToShow}/>

    </div>
   
  )
}

export default App