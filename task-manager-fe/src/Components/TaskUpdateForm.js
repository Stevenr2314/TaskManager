import axios from "axios";
import React, {useState} from "react";
import {ModalDismissAsyncButton} from '../Tools/Modal'

const TaskUpdateForm = props => {
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
        <form onSubmit={e => e.preventDefault()}>
            <label>Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <br />
            <label>Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <br />
            <label>Description:</label>
            <input name='description' type="text" value={form.description} onChange={handleChange} />
            <br />
            <ModalDismissAsyncButton>
                <button onClick={handleSubmit}>Submit</button>
            </ModalDismissAsyncButton>
        </form>
    )
}

export default TaskUpdateForm