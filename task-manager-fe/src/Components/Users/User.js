import React, {useContext} from "react";
import { UserContext } from "../../App";
import LoginForm from './LoginForm';

const User = () => {
    const {user} = useContext(UserContext)

    return (
        <div>
            {
                user.username ? 

                <div>
                    {user.username} is logged in
                </div>
                :

                <LoginForm />
            }
            
        </div>
    )
}

export default User