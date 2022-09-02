import React, { useEffect } from "react";
import Tasks from "../Components/Tasks/Tasks";
import '../Styles/Home.css'

const Home = props => {

    // useEffect(() => {
    //     localStorage
    // })
    return (
        <div className="home">
            <h1> Welcome User</h1>
            <section className='content'>
                Projects and Tasks
                <Tasks />
            </section>
        </div>
    )
}

export default Home