import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([{text:'abcd'}, {text:'xyz'}])
  return (
    <>
        {tasks.map((task) => (<h3>{task.text}</h3>))}

    </>
  )
}


export default  Tasks
