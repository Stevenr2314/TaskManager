import React, {useEffect, useState} from "react"
import axios from "axios"
import CreateTaskForm from "./CreateForm"
import Task from './Task'
import Checkbox from "./Checkbox"
import '../../Styles/Tasks.css'

const Tasks = props => {
    const [tasks, setTasks] = useState([])
    const [taskChange, setTaskChange] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5001/tasks/${props.projectId}`)
            .then(res => {
                setTasks(res.data.sort(({id:a},{id:b}) => b-a))
                setTaskChange(false)
            })
            .catch(err => console.log(err))
    }, [taskChange])

    const handleCheckbox = id => {
        axios.put(`http://localhost:5001/tasks/${id}`)
            .then(res => {
                setTaskChange(true)})
            .catch(err => console.log(err))
    }

    return(
        <ul className="tasksContainer">
          {
              tasks.length > 0 ?
              tasks.map((task, index) => {
                if(task.completed === true) return null
                return ( 
                  <div key={index} className='taskWrapper'>
                    <Checkbox onClick={() => handleCheckbox(task.id)}/>
                    <Task task={task} setTaskChange={setTaskChange} projectId={props.projectId}/>
                  </div>
                )})
              :
              <div> No tasks yet</div>
          }
          <br />
          <CreateTaskForm setTaskChange={setTaskChange} projectId={props.projectId}/>
        </ul>
    )
}
export default Tasks