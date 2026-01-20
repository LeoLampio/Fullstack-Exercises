import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    
    for (const person of persons) {
      if (person.number === newNumber) {
        alert(newNumber + ' is already added')
        return
      }
    }
    
    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} onFilterChange={(event) => setFilter(event.target.value)} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} name={newName} number={newNumber} onNameChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )

}

export default App