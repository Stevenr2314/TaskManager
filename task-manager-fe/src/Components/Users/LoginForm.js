import axios from "axios";
import React, {useContext} from "react";
import { UserContext } from "../../App";
import useInput from '../../Tools/useInput'
import RegisterForm from "./RegisterForm";

const LoginForm = () => {
    const username = useInput('')
    const password = useInput('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = {
            username: username.value, 
            password: password.value
        }
        axios.post('http://localhost:5001/users/login', {data:{form}})
            .then(res => {
                setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user))})
            .catch(err => console.log(err))
    }

    return (
        <div>
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