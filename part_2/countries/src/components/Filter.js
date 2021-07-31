import React from "react"

const Filter = (props) =>{
    const {country,setCountry} = props
    return(
    <div >
        <input onChange={((event)=>setCountry(event.target.value))} value={country}/>  
    </div>
    )

}

export default Filter
