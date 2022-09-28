import React, {useState} from "react";
import {ModalDismissButton} from '../../../Tools/Modal'

const UpdateTaskForm = props => {
    const [form, setForm] = useState(props.task)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        props.setTask(form)
        props.setTaskChanged(props.taskChanged)
    }
    return(
        <form className="Task--form" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <label htmlFor="dueDate">Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <label htmlFor="description">Description:</label>
            <textarea rows='5' name='description' value={form.description} onChange={handleChange} />
            <ModalDismissButton>
                <button type='button' onClick={handleSubmit}>Submit</button>
            </ModalDismissButton>
        </form>
    )
}

export default UpdateTaskForm