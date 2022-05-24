import React, {useState} from "react";

const initialForm = {
    title: '',
    dueDate: '',
    
}
const TaskForm = () => {
    const [form, setForm] = useState()
    return(
        <form>
            <label>Title</label>
            <input type="text" value={title} onChange={this.handleChange} />
        </form>
    )
}