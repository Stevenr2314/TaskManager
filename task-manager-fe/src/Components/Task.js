import React, {useEffect, useState} from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

const Task = () => {
    const [tasks, setTasks] = useState()
    const [taskChange, setTaskChange] = useState(false)
    const updateForm = {}

    useEffect(() => {
        axios.get('http://localhost:5001/tasks')
            .then(res => {
                setTasks(res.data)
                setTaskChange(!taskChange)
            })
            .catch(err => console.log(err))
    }, [taskChange])

    const handleDelete = id => {
        axios.delete('http://localhost:5001/tasks', {data: {id}})
            .then(resp => {
                setTaskChange(true)})
            .catch(err => console.log(err))
    }

    const handleUpdate = (id, updateForm) => {
        console.log(id)
    }
    return(
        <>
          {
              tasks ?
              tasks.map((task, index) => {return (
                  <div key={index}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    <button onClick={() => handleUpdate(task.id, updateForm)}>Update</button>
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