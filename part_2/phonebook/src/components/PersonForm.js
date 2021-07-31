import React from 'react'

const PersonForm=(props)=>{
    const {addNewPerson,newName,setNewName,newNumber,setNewNumber}=props
    return(
        <form onSubmit={addNewPerson}>
        <div>
          name: <input onChange={(event)=>setNewName(event.target.value)} value={newName}/>
        </div>
        <div>
          number: <input onChange={(event)=>setNewNumber(event.target.value)} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm