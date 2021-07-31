import React from 'react'

const Filter=(props)=>{
    const {filter,setFilter}=props
    return(
        <div>
        search by name: <input onChange={(event)=>setFilter(event.target.value)} value={filter}/>
        </div>
    )
}

export default Filter