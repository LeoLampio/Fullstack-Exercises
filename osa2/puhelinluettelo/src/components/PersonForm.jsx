
const PersonForm = ({ addPerson, name, number, onNameChange, onNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        <p>name: <input value={name} onChange={onNameChange} /></p>
        <p>number: <input value={number} onChange={onNumberChange} /></p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm