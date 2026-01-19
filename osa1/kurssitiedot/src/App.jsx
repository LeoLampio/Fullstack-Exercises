
const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.part1.name} count={props.part1.exercises} />
      <Part name={props.part2.name} count={props.part2.exercises} />
      <Part name={props.part3.name} count={props.part3.exercises} />
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

const Total = ({ count }) => {
  return (
    <p>Number of exercises {count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App