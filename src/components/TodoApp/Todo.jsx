import React, { useState } from 'react'

function Todo() {

    const [tododata, setTodoData] =useState([])
    const [taskName, setTaskName] =useState('')


    const handleSetTodoData = () =>{
        setTodoData(pre=>[...pre, taskName])
        setTaskName('')
    }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <input placeholder='Enter task' name="task" value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
    <button onClick={handleSetTodoData}>Submit</button>
    {tododata && tododata.map((val, idx)=>{
        return(
           <ol>
            <li>{idx}. {val}</li>
           </ol> 
        )})}
    </div>
  )
}

export default Todo