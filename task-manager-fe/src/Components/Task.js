import React, {useEffect, useState} from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskUpdateForm from "./TaskUpdateForm";
import {Modal, ModalContentsBase, ModalContents, ModalDismissButton, ModalOpenButton} from '../Tools/Modal'

const Task = () => {
    const [tasks, setTasks] = useState()
    const [taskChange, setTaskChange] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5001/tasks')
            .then(res => {
                
                setTasks(res.data.sort(({id:a},{id:b}) => b-a))
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
                    <Modal>
                        <ModalOpenButton>
                         <button>Update</button>   
                        </ModalOpenButton>
                        <ModalContents title='Update Task'>
                            <TaskUpdateForm setTaskChange={setTaskChange} task={task}/>
                        </ModalContents>
                    </Modal>
                  </div>
              )})
              :
              <div> Loading</div>
          }
          <br />
          <TaskForm setTaskChange={setTaskChange}/>
        </>
    )
}
export default Task