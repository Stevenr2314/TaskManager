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

    const handleSubmit = () => {
        const form = {
            username: username.value, 
            password: password.value,
            email: email.value
        }
         return axios.post('http://localhost:5001/users/register', {form})
            .then(res => {
                setUser(res.data[0])
                localStorage.setItem('user', JSON.stringify(res.data[0]))
                return 'success'})
            .catch(err => console.log(err))
    }
  return (
    <Modal>
        <ModalOpenButton>
            <button className='register--button'>Register</button>
        </ModalOpenButton>
        <ModalContents title='Register an Account'>
            <form onSubmit={e => e.preventDefault()} className='register--form'>
                <label htmlFor="email">Email: </label>
                <input type='text' name="email" {...email}/>
                <label htmlFor="username">Username: </label>
                <input type='text' name="username" {...username}/>
                <label htmlFor="password">Password: </label>
                <input type='password' name="password" {...password}/>
                <ModalDismissAsyncButton>
                    <button type="button" onClick={handleSubmit}>Register</button>
                </ModalDismissAsyncButton>
            </form>
        </ModalContents>
    </Modal>
  )
}

export default RegisterForm