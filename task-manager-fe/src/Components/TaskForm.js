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
    return(
        <form>
            <label>Title</label>
            <input name='title' type="text" value={form.title} onChange={handleChange} />
        </form>
    )
}

export default TaskForm