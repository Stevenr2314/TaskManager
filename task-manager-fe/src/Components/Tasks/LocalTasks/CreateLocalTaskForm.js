import React, {useEffect, useState} from "react";
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
        console.log(props.localTasks)
    }

    useEffect(() => {
        console.log(props.localTasks)
    }, [])
    return(
        <form onSubmit={e => e.preventDefault()}>
            <label>Title: </label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
            <br />
            <label>Description:</label>
            <input name='description' type="text" value={form.description} onChange={handleChange} />
            <br />
            <label>Due Date: </label>
            <input name='dueDate' type="text" value={form.dueDate} onChange={handleChange} />
            <br />
            <ModalDismissButton>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </ModalDismissButton>
        </form>
    )
}

export default CreateLocalTaskForm