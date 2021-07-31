import {React,useEffect,useState} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import phoneBookService from './components/phoneBookService';
import Notification from './components/Notification';
const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(()=>{
      phoneBookService.getAll()
      .then(persons =>setPersons(persons))
  },[])

  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filter,setFilter]=useState('')
  const [message,setMessage]=useState('Hola')
  const [messageType,setMessageType]=useState('Hola')
  const addNewPerson = (event) =>{
      event.preventDefault()
      const newPerson={
        name:newName,
        number:newNumber
      }
      const exists=persons.find((person)=>person.name===newName)
      exists ? updatePerson(exists.id,newPerson):
      phoneBookService.addPerson(newPerson)
      .then(addedPerson=>{
        setPersons(persons.concat(addedPerson))
        setMessage(`${addedPerson.name} has been added to the phonebook`)
        setMessageType("success")
        setTimeout(()=>setMessage(null),5000)
        setNewName('')
        setNewNumber('')
    })
  }

  const deletePerson=(personToDelete)=>{
    if(window.confirm(`Do you really want to delete ${personToDelete.name}?`))
      phoneBookService.deletePerson(personToDelete.id)
      .then(()=>{
        setPersons(persons.filter(person=>person.id!==personToDelete.id))
        setMessage(`${personToDelete.name} has been deleted`)
        setMessageType("success")
        setTimeout(()=>setMessage(null),5000)
      })
      .catch(error=>{
        setMessage(`${personToDelete.name} has already been deleted from the server`)
        setMessageType("error")
        setTimeout(()=>setMessage(null),5000)
        setPersons(persons.filter(person=>person.id!==personToDelete.id))
      })
  }
  const updatePerson = (id,modifiedPerson)=>{
    if(window.confirm(`${modifiedPerson.name} is already in the phonebook would you like to change the old phone with the new one?`))
      phoneBookService.updatePerson(id,modifiedPerson)
      .then(
        updatedPerson=>{
          setPersons(persons.map(person=>person.id!==id?person:updatedPerson))
          setMessage(`${updatedPerson.name} has been updated`)
          setMessageType("success")
          setTimeout(()=>setMessage(null),5000)
      })
      .catch(error=>{
        setMessage(`${modifiedPerson.name} has already been deleted from the server`)
        setMessageType("error")
        setTimeout(()=>setMessage(null),5000)
        setPersons(persons.filter(person=>person.id!==modifiedPerson.id))
      })
    setNewName('')
    setNewNumber('')
  }
  const personsToShow = filter===''?persons:persons.filter((person)=>person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Add a new</h2>
      <PersonForm addNewPerson={addNewPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}


export default App;
