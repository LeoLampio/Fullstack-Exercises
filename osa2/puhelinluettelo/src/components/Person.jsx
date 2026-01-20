
const Person = ({ person, delFunc }) => {
  return (
    <p><button onClick={() => delFunc(person)}>remove</button> {person.name} {person.number}</p>
  )
}

export default Person