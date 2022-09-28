import React, {useState} from "react";
import { ModalDismissButton } from "../../../Tools/Modal";
import pushToStateArray from "../../../Tools/pushToStateArray";


const CreateLocalTaskForm = props => {
    const initialForm = {
        title: '',
        description: '',
        dueDate: '',
        completed: false
        
    }
    const [form, setForm] = useState(initialForm)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        props.setLocalTasks(pushToStateArray(props.localTasks, form))
    }

    return(
        <form className="Task--form" onSubmit={e => e.preventDefault()}>
            <label>Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <label>Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <label>Description:</label>
            <textarea name='description' value={form.description} onChange={handleChange} />
            <ModalDismissButton>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </ModalDismissButton>
        </form>
    )
}

export default CreateLocalTaskForm