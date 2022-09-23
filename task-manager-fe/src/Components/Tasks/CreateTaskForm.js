import axios from "axios";
import React, {useState} from "react";
import { Modal, ModalContents, ModalDismissAsyncButton, ModalDismissButton, ModalOpenButton } from "../../Tools/Modal";


const CreateTaskForm = props => {
    const initialForm = props.projectId ? 
        {
            title: '',
            description: '',
            dueDate: '',
            project_id: props.projectId
        }
        :
        {
            title: '',
            description: '',
            dueDate: '',
            user_id: props.userId
        }

    const [form, setForm] = useState(initialForm)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        return axios.post(`http://localhost:5001/tasks`, form)
            .then(res => {
                props.setTaskChange(true)
                return 'success'
            })
            .catch(err => console.log(err))
    }
    return(
        <Modal>
            <ModalOpenButton>
                <button>Create Task</button>
            </ModalOpenButton>
            <ModalContents title='Create Task'>
                <form className="Task--form" onSubmit={e => e.preventDefault()}>
                    <label>Title: </label>
                    <input name='title' type="text" value={form.title} onChange={handleChange} />
                    <label>Due Date: </label>
                    <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
                    <label>Description:</label>
                    <textarea rows='5' name='description' type="text" value={form.description} onChange={handleChange} />
                    <ModalDismissAsyncButton>
                        <button type='button' onClick={handleSubmit}>Submit</button>
                    </ModalDismissAsyncButton>
                </form>
                <ModalDismissButton>
                        <button type="button">Cancel</button>
                </ModalDismissButton>
            </ModalContents>
        
        </Modal>
    )
}

export default CreateTaskForm