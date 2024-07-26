import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, avg, pos}) => {

  if (good === 0 && neutral === 0 && bad === 0) {
    return(
      <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
      </>
    )
  }
  else{
    return (
      <>
        <h2>Statistics</h2>
        <StatisticsLine text='Good' value={good}></StatisticsLine>
        <StatisticsLine text='Neutral' value={neutral}></StatisticsLine> 
        <StatisticsLine text='Bad' value={bad}></StatisticsLine> 
        <StatisticsLine text='All' value={all}></StatisticsLine> 
        <StatisticsLine text='Average' value={avg}></StatisticsLine> 
        <StatisticsLine text='Positive' value={pos} > </StatisticsLine> 
      </>
    )

  }

}

const StatisticsLine = (props) => {
  return(
      <table>
        <tbody>
          <tr>
              <td>{props.text}:</td>
              <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
  )
}

const Button = (props) => <button onClick={() => props.onClick(props.id)}> {props.text} </button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const avg = ((good - bad) / all).toFixed(2)
  const pos = ((good / all) * 100).toFixed(2) + " %"

  const handleClick = (id) => {
    if (id === '1') {
      setGood(good + 1)      
    }
    else if (id === '2') {
      setNeutral(neutral + 1)
    } 
    else {
      setBad(bad + 1)
    }
  }


  return (
    <div>
      <h1> Give Feedback</h1>
      <Button text='Good' onClick={handleClick} id="1"></Button>
      <Button text='Neutral' onClick={handleClick} id='2'></Button>
      <Button text='Bad' onClick={handleClick} id='3'></Button>
      <Statistics good={good} bad={bad} neutral={neutral} avg={avg} pos={pos} all={all}></Statistics>

    </div>
  )
}

export default App