import React from 'react'


const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
) 

const Content = (props) =>(
  <div>
    <Parts part={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Parts part={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Parts part={props.parts[2].name} exercises={props.parts[2].exercises}/>
  </div>
)

const Total = (props) =>(
  <p>Number of exercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>
)
const Parts = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}


export default App;
