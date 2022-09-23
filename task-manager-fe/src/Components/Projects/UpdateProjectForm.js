import axios from "axios";
import React, {useState} from "react";
import {ModalDismissAsyncButton} from '../../Tools/Modal'

const UpdateProjectForm = props => {
    const [form, setForm] = useState(props.project)

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        return axios.patch('http://localhost:5001/projects', {data: {form}})
            .then(res => {
                props.setProjectsChange(true)
                return res.data.message
            })
            .catch(err => console.log(err))
        
    }
    return(
        <form className="Project--form" onSubmit={e => e.preventDefault()}>
            <label htmlFor="name">Name: </label>
            <input name='name' type="text" value={form.name} onChange={handleChange} />
            <label htmlFor="description">Description:</label>
            <textarea rows='5' name='description' type="text" value={form.description} onChange={handleChange} />
            <ModalDismissAsyncButton>
                <button onClick={handleSubmit}>Submit</button>
            </ModalDismissAsyncButton>
        </form>
    )
}

export default UpdateProjectForm