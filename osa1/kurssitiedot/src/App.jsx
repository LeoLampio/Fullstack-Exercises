
const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part name={parts[0].name} count={parts[0].exercises} />
      <Part name={parts[1].name} count={parts[1].exercises} />
      <Part name={parts[2].name} count={parts[2].exercises} />
    </>
  )
}

const Part = ({ name, count }) => {
  return (
    <p>
      {name} {count}
    </p>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App