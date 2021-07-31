
import React from "react"

const Total = ({ parts }) => {
    return(

      <b>Number of exercises {parts.reduce((acc,parts)=>acc+parts.exercises,0)}</b>
    ) 
  }

export default Total