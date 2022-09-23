import axios from "axios";
import React, {useState} from "react";
import {ModalDismissAsyncButton} from '../../Tools/Modal'

const UpdateTaskForm = props => {
    const [form, setForm] = useState(props.task)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        return axios.patch('http://localhost:5001/tasks', {data: {form}})
            .then(res => {
                props.setTaskChange(true)
                return res.data.message
            })
            .catch(err => console.log(err))
        
    }
    return(
        <form className="Task--form" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <label htmlFor="dueDate">Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <label htmlFor="description">Description:</label>
            <textarea rows='5' name='description' type="text" value={form.description} onChange={handleChange} />
            <ModalDismissAsyncButton>
                <button onClick={handleSubmit}>Submit</button>
            </ModalDismissAsyncButton>
        </form>
    )
}

export default UpdateTaskForm