import axios from "axios";
import React, {useState} from "react";
import useInput from '../../Tools/useInput'

const LoginForm = () => {
    const username = useInput('')
    const password = useInput('')
    

    const handleSubmit = event => {
        event.preventDefault()
        const form = {
            username: username.value, 
            password: password.value
        }
        axios.post('http://localhost:5001/users/login', {data:{form}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                <input type='text' name="username" placeholder="username" {...username}/>
            </label>
            <br />
            <label htmlFor="password">
                <input type='password' name="password" placeholder="password" {...password}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm