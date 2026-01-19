import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad
  
  if (sum === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine name='good' value={good} />
        <StatisticLine name='neutral' value={neutral} />
        <StatisticLine name='bad' value={bad} />
        <StatisticLine name='all' value={sum} />
        <StatisticLine name='average' value={(good - bad) / sum} />
        <StatisticLine name='positive (%)' value={good / sum * 100} />
      </tbody>
    </table>
  )
}

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

const StatisticLine = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name='good' onClick={() => setGood(good + 1)} />
      <Button name='neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button name='bad' onClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App