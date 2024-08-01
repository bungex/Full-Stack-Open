import { useState, useEffect } from 'react'
import Search from './components/Search'
import AddNew from './components/AddNew'
import Persons from './components/Persons'
import personService from './services/person'

const Notification = ({ message, type }) => {

  let display = 'success'
  if (type === 2){
    display = 'error'
  }

  if (message === null) {
    return null
  }

  return (
    <div className={display}>
      {message}
    </div>
  )
}



const App = () => {

  const  [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [find, setFind] = useState('')
  const [notification, setNotification] = useState(null)
  const [typeOfMessage, setTypeOfMessage] =  useState(0)


  useEffect(() => {
    personService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
      })
  }, [])  



  const addName = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      const updateFlag = window.confirm(`${newName} is alredy added to phonebook, replace the old number with a new one?`)
      if (updateFlag){
        const personToUpdate = persons.find(e => e.name === newName)
        console.log(personToUpdate.id)

        const updatedPerson = {
          ...personToUpdate,
          number: newNum
        }
        personService
          .updateNumber(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setNotification(`Successfully updated ${returnedPerson.name} number`)
            setTimeout(() => {
              setNotification(null)
            }, 3500)
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNum('')
          })
          .catch(error => alert(`${error}`))

      }
      else{
        alert(`Canceled`)
      }
    }
    else{
      const nameObject = {
        name: newName,
        number: newNum,
      }

      personService
      .create(nameObject)
      .then(response => {
        setTypeOfMessage(1)
        setNotification(`Successfully added ${response.name} to the phonebook`)
            setTimeout(() => {
              setNotification(null)
            }, 3500)
        setPersons(persons.concat(response))
        setNewName('')
        setNewNum('')
      })
      .catch(error => console.log(error))
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
    // console.log(personToRemove.id)
    const confirmFlag = window.confirm(`${p.name} ${p.id} Delete this entry?`)
    if (confirmFlag) {
      personService
        .remove(personToRemove.id)
        .then(() => {
          setTypeOfMessage(1)
          const updatedPerson = persons.filter(person => person.id !== p.id)
          setPersons(updatedPerson)
          alert(`${personToRemove.name} was successfully removed`)
        })
        .catch(() => {
          setTypeOfMessage(2)
          setNotification(`Information of ${personToRemove.name} was alredy removed form server`)
          setTimeout(() => {
            setNotification(null)
          }, 3500)
          setPersons(persons.filter(p => p.id !== personToRemove.id))
        })
    }
    else(
      console.log('Deletation canceled')
    )
    

}
  

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(find.toLowerCase())
    
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={typeOfMessage}/>
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