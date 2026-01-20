import { useState, useEffect } from 'react'
import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    personService.getAll()
      .then(loaded => setPersons(loaded))
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    
    for (const person of persons) {
      if (person.number === newNumber) {
        alert(newNumber + ' is already added')
        return
      }
    }
    
    for (const person of persons) {
      if (person.name === newName) {
        if (!confirm(newName + ' is already added, replace the old number with a new one?')) {
          return
        }
        personService.update(person.id, { name: newName, number: newNumber })
          .then(changed => {
            setPersons(persons.map(p => p.id !== changed.id ? p : changed))
            setNewName('')
            setNewNumber('')  
          })
        return
      }
    }
    
    personService.add({ name: newName, number: newNumber })
      .then(added => {
        setPersons(persons.concat(added))
        setNewName('')
        setNewNumber('')  
    })
  }
  
  const removePerson = (person) => {
    if (!confirm('delete ' + person.name + '?')) {
      return
    }
    personService.remove(person.id).then(removed => {
      setPersons(persons.filter(p => p.id !== removed.id))
    })
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} onFilterChange={(event) => setFilter(event.target.value)} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} name={newName} number={newNumber} onNameChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} delFunc={removePerson} />
    </div>
  )

}

export default App