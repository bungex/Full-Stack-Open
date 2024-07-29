import { useState, useEffect } from 'react'
import Search from './components/Search'
import AddNew from './components/AddNew'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {

  const  [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [find, setFind] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('sucess')
        setPersons(response.data)
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

      axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
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