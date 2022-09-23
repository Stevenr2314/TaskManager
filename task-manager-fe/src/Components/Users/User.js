import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../../App";
import LoginForm from './LoginForm';
import '../../Styles/User.css'

const User = () => {
    const {user, setUser} = useContext(UserContext)

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <div className="userContainer">
            {
                user && user.username ? 
                <div>
                    <p className="user--info">{user.username}</p>
                    <button className="logout--button" onClick={() => handleLogout()}>Logout</button>
                </div>
                
                :
                <LoginForm />
            }
            
        </div>
    )
}

export default User