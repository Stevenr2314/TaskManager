import React, {useContext} from "react";
import { UserContext } from "../../App";
import LoginForm from './LoginForm';

const User = () => {
    const {user, setUser} = useContext(UserContext)
    console.log(user)

    return (
        <div>
            {
                user.username ? 

                <div>
                    User Found
                </div>
                :

                <LoginForm />
            }
            
        </div>
    )
}

export default User