import axios from "axios";
import React, {useContext, useState} from "react";
import { UserContext } from "../../App";
import { ModalDismissAsyncButton } from "../../Tools/Modal";


const CreateProjectForm = props => {
    const {user} = useContext(UserContext)
    const [form, setForm] = useState({
        name: '',
        description: '',
        user_id: user.id
    })

    const handleChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        return axios.post('http://localhost:5001/projects', form)
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
            <label htmlFor="description">Description: </label>
            <textarea rows='5' name='description' type="text" value={form.description} onChange={handleChange} />
            <ModalDismissAsyncButton>
                <button onClick={handleSubmit}>Submit</button>
            </ModalDismissAsyncButton>
        </form>
    )
}

export default CreateProjectForm