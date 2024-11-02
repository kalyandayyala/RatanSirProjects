import React, { useState } from 'react'

function Task() {
    
    const [count ,setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    const taskAdd= ()=>{
        setCount(count+1)
        const newTask = { task: `Task ${count + 1}` };
        setTasks([...tasks, newTask]);

   
    }
    const item = tasks.map((c, index) => (
        <li key={index}>{c.task}</li>
    ))
   

   


    return (
        <>
        <button onClick={ ()=>taskAdd() }>Task</button>
        <ul>
           {item}
        </ul>
        
       
        
        
        </>
        
    )
}

export default Task
