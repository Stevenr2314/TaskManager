import React, {useEffect, useState} from "react"
import axios from "axios"
import CreateTaskForm from "./CreateTaskForm"
import Task from './Task'
import '../../Styles/Tasks.css'

const Tasks = props => {
    const [tasks, setTasks] = useState([])
    const [taskChange, setTaskChange] = useState(false)

    useEffect(() => {
        const taskPath = props.userId ? `user_id/${props.userId}` : `project_id/${props.projectId}`
        axios.get(`http://localhost:5001/tasks/${taskPath}`)
            .then(res => {
                setTasks(res.data.sort(({id:a},{id:b}) => b-a))
                setTaskChange(false)
            })
            .catch(err => console.log(err))
    }, [taskChange])

    return(
        <ul className="tasksContainer">
          {
              tasks.length > 0 ?
              tasks.map((task, index) => {
                if(task.completed === true) return null
                return ( 
                    <Task key={index} task={task} setTaskChange={setTaskChange}/>
                )})
              :
              <div className="noTasks"> No tasks yet</div>
          }
          {
              props.userId ?
              <CreateTaskForm setTaskChange={setTaskChange} userId={props.userId}/>
              :
              <CreateTaskForm setTaskChange={setTaskChange} projectId={props.projectId}/>
          }
          
        </ul>
    )
}
export default Tasks