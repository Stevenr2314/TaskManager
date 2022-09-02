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
        if (props.daily) {
            setTasks()
        }
        axios.get('http://localhost:5001/tasks')
            .then(res => {
                
                setTasks(res.data.sort(({id:a},{id:b}) => b-a))
                setTaskChange(!taskChange)
            })
            .catch(err => console.log(err))
    }, [taskChange])

    const handleCheckbox = id => {
        console.log('handlingCheckbox')
        axios.put('http://localhost:5001/tasks', {data: {id}})
            .then(res => {
                console.log(res)})
            .catch(err => console.log(err))
    }

    return(
        <div className="tasksContainer">
          {
              tasks ?
              tasks.map((task, index) => {
                if(!task.completed)
                return ( 
                  <div key={index} className='taskWrapper'>
                    <Checkbox onClick={() => handleCheckbox(task.id)}/>
                    <Task task={task} setTaskChange={setTaskChange}/>
                  </div>
                )
                return null})
              :
              <div> Loading</div>
          }
          <br />
          <CreateTaskForm setTaskChange={setTaskChange}/>
        </div>
    )
}
export default Tasks