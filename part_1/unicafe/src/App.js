import React, { useState } from 'react'



const Statistic= ({name, value}) => <tr><th>{name}</th><th>{value}</th></tr>

const Statistics = (props) =>{
  const {good,neutral,bad} = props
  const all=good+neutral+bad
  const average=(good-bad)/all
  const positive=good*100/all
  if(all===0){
    return(
      <div>
        <h2>Statistics</h2>
        No statistics to display
      </div>
    )
  }
  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic name="Good" value={good}/>
          <Statistic name="Neutal" value={neutral}/>
          <Statistic name="Bad" value={bad}/>
          <Statistic name="All" value={all}/>
          <Statistic name="Average" value={average}/>
          <Statistic name="Positive" value={positive}/>
        </tbody>
      </table>
    </div>
  );
}

const Button = ({eventHandle,text}) => <button onClick={eventHandle}>{text}</button>



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button eventHandle={()=>setGood(good+1)} text="good"/>
      <Button eventHandle={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button eventHandle={()=>setBad(bad+1)} text="bad"/>
    	<Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App