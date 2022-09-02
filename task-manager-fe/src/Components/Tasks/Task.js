import React from "react";
import axios from "axios";
import TaskUpdateForm from "./UpdateForm"
import {Modal, ModalContents, ModalDismissAsyncButton, ModalDismissButton, ModalOpenButton} from '../../Tools/Modal'

const Task = props => {
    const {task, setTaskChange} = props

    const handleDelete = id => {
        return axios.delete('http://localhost:5001/tasks', {data: {id}})
            .then(resp => {
                setTaskChange(true)
                return resp.data.message})
            .catch(err => console.log(err))
    }

    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{`${task.completed}`}</p>
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
                </ModalContents>
            </Modal>
        </div>
        
    )
}

export default Task