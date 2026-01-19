
const Total = ({ parts }) => {
  const count = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <b>
      total of {count} exercises
    </b>
  )
}

export default Total