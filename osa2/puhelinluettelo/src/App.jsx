import { useState } from 'react'

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
  
  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h1>Phonebook</h1>
      <p>filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} /></p>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          <p>name: <input value={newName} onChange={(event) => setNewName(event.target.value)} /></p>
          <p>number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(p => <p key={p.name}>{p.name} {p.number}</p>)}
    </div>
  )

}

export default App