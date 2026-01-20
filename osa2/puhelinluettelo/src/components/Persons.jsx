import Person from './Person'

const Persons = ({ persons, filter }) => {
  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <>
      {personsToShow.map(p => <Person key={p.name} person={p} />)}
    </>
  )
}

export default Persons