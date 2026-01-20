import Person from './Person'

const Persons = ({ persons, filter, delFunc }) => {
  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <>
      {personsToShow.map(p => <Person key={p.name} person={p} delFunc={delFunc} />)}
    </>
  )
}

export default Persons