import axios from "axios";
import React, {useContext, useState} from "react";
import { UserContext } from "../../App";
import useInput from '../../Tools/useInput'
import RegisterForm from "./RegisterForm";
import {userLoginSchema} from "../../Validation/FormValidation";

const LoginForm = () => {
    const username = useInput('')
    const password = useInput('')
    const {setUser} = useContext(UserContext)
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        const form = {
            username: username.value, 
            password: password.value
        }
        userLoginSchema.validate(form)
            .then(valid => {
                    setError('')
                    axios.post('http://localhost:5001/users/login', {data: {form}})
                        .then(res => {
                            setUser(res.data.user)
                            localStorage.setItem('user', JSON.stringify(res.data.user))
                        })
                        .catch(err => console.log(err))
                }
            )
            .catch(err => setError(err.errors[0]))

    }

    return (
        <div>
            {error.length > 0 && <p className='error'>{`${error}`}</p> }
            <form onSubmit={handleSubmit} className='login--form'>
                <label htmlFor="username">
                    <input type='text' name="username" placeholder="username" {...username}/>
                </label>
                <br />
                <label htmlFor="password">
                    <input type='password' name="password" placeholder="password" {...password}/>
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <RegisterForm />
        </div>
    )
}

export default LoginForm