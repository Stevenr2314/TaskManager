import React from "react";
import {Modal, ModalContents, ModalDismissAsyncButton, ModalDismissButton, ModalOpenButton} from '../../../Tools/Modal'

const LocalTask = props => {
    const {task} = props

    const handleDelete = id => {
        return 
    }

    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
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
                    <br />
                </ModalContents>
            </Modal>
        </div>
        
    )
}

export default LocalTask