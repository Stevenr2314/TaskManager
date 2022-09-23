import axios from 'axios'
import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { Modal, ModalContents, ModalDismissAsyncButton, ModalOpenButton } from '../../Tools/Modal'
import useInput from '../../Tools/useInput'

function RegisterForm() {
    const username = useInput('')
    const password = useInput('')
    const email = useInput('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = {
            username: username.value, 
            password: password.value,
            email: email.value
        }
         return axios.post('http://localhost:5001/users/register', {data:{form}})
            .then(res => {
                setUser(res.data.user)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                return 'success'})
            .catch(err => console.log(err))
    }
  return (
    <Modal>
        <ModalOpenButton>
            <button className='register--button'>Register</button>
        </ModalOpenButton>
        <ModalContents>
            <form onSubmit={handleSubmit} className='register--form'>
                <label htmlFor="email">
                    <input type='text' name="email" placeholder="email" {...email}/>
                </label>
                <br />
                <label htmlFor="username">
                    <input type='text' name="username" placeholder="username" {...username}/>
                </label>
                <br />
                <label htmlFor="password">
                    <input type='password' name="password" placeholder="password" {...password}/>
                </label>
                <br />
                <ModalDismissAsyncButton>
                    <button type="submit">Login</button>
                </ModalDismissAsyncButton>
            </form>
        </ModalContents>
    </Modal>
  )
}

export default RegisterForm