import { useState, useEffect } from 'react'
import Search from './components/Search'
import AddNew from './components/AddNew'
import Persons from './components/Persons'
import personService from './services/person'

const App = () => {

  const  [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [find, setFind] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
      })
  }, [])  



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
      }

      personService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNum('')
      })

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

  const handleRemove = (p) => {
    const personToRemove = persons.find(x => x.id === p.id)
    console.log(personToRemove.id)
    if (window.confirm(`${p.name} ${p.id} Delete this entry?`)) {
      personService
        .remove(personToRemove.id)
        .then(() => {
          const updatedPerson = persons.filter(person => person.id !== p.id)
          setPersons(updatedPerson)
          alert(`${personToRemove.name} was successfully removed`)
        })
        .catch(error => alert(`${error}`))
    }
    else(
      console.log(alert('Deletation canceled'))
    )
    

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
      <div>
        {personsToShow.map(p =>
          <Persons key={p.id} content={p} handleRemove={ () => handleRemove(p)}/>
        )}
      </div>
    </div>
   
  )
}

export default App