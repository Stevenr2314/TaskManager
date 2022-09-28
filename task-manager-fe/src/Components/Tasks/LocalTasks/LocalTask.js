import React, {useEffect, useState} from "react";
import Checkbox from '../Checkbox'
import {Modal, ModalContents, ModalDismissButton, ModalOpenButton} from '../../../Tools/Modal'
import UpdateLocalTaskForm from "./UpdateLocalTaskForm";

const LocalTask = props => {
    const [task, setTask] = useState(props.task)
    const [taskChanged, setTaskChanged] = useState(false)

    useEffect(() => {
        props.updateChanges(props.taskIndex, task)

    }, [taskChanged])

    const handleCheckbox = (task) => {
        setTask({...task, 'completed': !task.completed})
        setTaskChanged(true)
    }

    return (
        <li className="task--wrapper">
            <Checkbox initialValue={task.completed} onClick={() => handleCheckbox(task)}/>
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
                        <ModalDismissButton>
                            <button onClick={() => props.handleDelete(props.taskIndex)}>Yes</button>
                        </ModalDismissButton>
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
                        <UpdateLocalTaskForm task={task} setTask={setTask} taskChanged={taskChanged} setTaskChanged={setTaskChanged}/>
                        <ModalDismissButton>
                        <button type="button">Cancel</button>
                        </ModalDismissButton>
                    </ModalContents>
                </Modal>
            </div>
        </li>
        
    )
}

export default LocalTask