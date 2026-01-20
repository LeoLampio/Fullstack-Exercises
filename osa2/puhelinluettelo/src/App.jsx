import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const url = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    axios
      .get(url)
      .then(response => setPersons(response.data))
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    
    for (const person of persons) {
      if (person.number === newNumber) {
        alert(newNumber + ' is already added')
        return
      }
    }
    
    axios
      .post(url, { name: newName, number: newNumber })
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')  
    })
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