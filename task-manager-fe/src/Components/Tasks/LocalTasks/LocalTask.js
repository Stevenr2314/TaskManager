import React from "react";
import Checkbox from '../Checkbox'
import {Modal, ModalContents, ModalDismissAsyncButton, ModalDismissButton, ModalOpenButton} from '../../../Tools/Modal'

const LocalTask = props => {
    const {task} = props

    const handleCheckbox = (task) => {
        task.completed = !task.completed
    }

    const handleDelete = id => {
        return 
    }

    return (
        <li className="task--wrapper">
            <Checkbox onClick={() => handleCheckbox(task)}/>
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
                        <p>LocalTaskUpdate</p>
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