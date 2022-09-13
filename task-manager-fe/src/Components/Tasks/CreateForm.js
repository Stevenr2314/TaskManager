import axios from "axios";
import React, {useState} from "react";


const CreateTaskForm = props => {
    const initialForm = {
        title: '',
        description: '',
        dueDate: '',
        project_id: props.projectId
        
    }
    const [form, setForm] = useState(initialForm)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post(`http://localhost:5001/tasks`, form)
            .then(res => {
                props.setTaskChange(true)
            })
            .catch(err => console.log(err))
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <br />
            <label>Description:</label>
            <input name='description' type="text" value={form.description} onChange={handleChange} />
            <br />
            <label>Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <br />
            <button type='submit' value='Submit'>Submit</button>
        </form>
    )
}

export default CreateTaskForm