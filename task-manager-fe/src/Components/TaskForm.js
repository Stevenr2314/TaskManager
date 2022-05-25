import axios from "axios";
import React, {useState} from "react";

const initialForm = {
    title: '',
    dueDate: '',
    description: '',
    
}
const TaskForm = () => {
    const [form, setForm] = useState(initialForm)

    const handleChange = event => {
        setForm({...initialForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        axios.post('http://localhost:5001/tasks', form)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <br />
            <label>Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <br />
            <label>Description:</label>
            <input name='description' type="text" value={form.description} onChange={handleChange} />
            <br />
            <button type='submit' value='Submit'/>
        </form>
    )
}

export default TaskForm