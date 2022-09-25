import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import Projects from "../Components/Projects/Projects";
import LocalTasks from "../Components/Tasks/LocalTasks/LocalTasks";
import Tasks from "../Components/Tasks/Tasks";
import '../Styles/Home.css'

const Home = () => {
    const {user} = useContext(UserContext)
    return (
        <div className="home">
            <h1> Task Manager</h1>
            {
                user && user.username !== undefined ? 
                <section className='content'>
                    <Tasks userId={user.id}/>
                    <Projects />
                </section>
                :
                <section className='content'>
                    <LocalTasks />
                </section>
            }
            
        </div>
    )
}

export default Home