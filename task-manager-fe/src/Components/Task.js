import React, {useEffect, useState} from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const Task = () => {
    const [tasks, setTasks] = useState()
    const [taskChange, setTaskChange] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5001/tasks')
            .then(res => {
                setTasks(res.data)
                setTaskChange(false)
            })
            .catch(err => console.log(err))
    }, [taskChange])
    return(
        <>
          {
              tasks ?
              tasks.map((task, index) => {return (
                  <div key={index}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                  </div>
              )})
              :
              <div> Loading</div>
          }
          <TaskForm setTaskChange={setTaskChange} />
        </>
    )
}
export default Task