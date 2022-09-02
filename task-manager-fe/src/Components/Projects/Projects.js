import axios from "axios";
import React, {useEffect, useState} from "react";


const Projects = () => {
    const [projects, setProjects] = useState([])
    const [projectsChange, setProjectsChange] = useState(false)

    // useEffect(() => {
    //     axios.get('http://localhost:5001/projects', { params: { id: userId } })
    //         .res(res => console.log(res))
    //         .catch(err => console.log(err))
    // }, [projectsChange])
    return (
        <div>
            Projects:
            {
                projects ?
                projects.map(project => {
                    return(
                        <div>{project.name}</div>
                    )
                })
                :
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default Projects