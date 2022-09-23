import React from "react";
import axios from "axios";
import TaskUpdateForm from "./UpdateTaskForm"
import {Modal, ModalContents, ModalDismissAsyncButton, ModalDismissButton, ModalOpenButton} from '../../Tools/Modal'
import Checkbox from "./Checkbox";

const Task = props => {
    const {task, setTaskChange} = props

    const handleDelete = id => {
        return axios.delete(`http://localhost:5001/tasks/${id}`)
            .then(resp => {
                setTaskChange(true)
                return resp.data.message})
            .catch(err => console.log(err))
    }

    const handleCheckbox = id => {
        axios.put(`http://localhost:5001/tasks/${id}`)
            .then(res => {
                setTaskChange(true)})
            .catch(err => console.log(err))
    }

    return (
        <li className="task--wrapper">
            <Checkbox onClick={() => handleCheckbox(task.id)}/>
            <section className="task--info">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <h4>{task.dueDate}</h4>
            </section>
            <div className="task--buttons">
                <Modal>
                    <ModalOpenButton>
                        <button>Delete</button>
                    </ModalOpenButton>
                    <ModalContents title='Confirm Delete?'>
                        <ModalDismissAsyncButton>
                            <button onClick={() => handleDelete(task.id)}>Yes</button>
                        </ModalDismissAsyncButton>
                        <ModalDismissButton>
                            <button>No</button>
                        </ModalDismissButton>
                    </ModalContents>
                </Modal>
                <Modal>
                    <ModalOpenButton>
                        <button>Update</button>   
                    </ModalOpenButton>
                    <ModalContents title='Update Task'>
                        <TaskUpdateForm setTaskChange={setTaskChange} task={task}/>
                        <ModalDismissButton>
                        <button type="button">Cancel</button>
                        </ModalDismissButton>
                    </ModalContents>
                </Modal>
            </div>
        </li>
        
    )
}

export default Task