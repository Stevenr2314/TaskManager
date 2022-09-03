import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../../App";
import CreateProjectButton from "./CreateProjectButton";


const Projects = () => {
    const [projects, setProjects] = useState()
    const [projectsChange, setProjectsChange] = useState(false)
    const {user} = useContext(UserContext)

    useEffect(() => {
        if(user.id){
            console.log('fetching info')
            axios.get(`http://localhost:5001/projects/?id=${user.id}`)
                .then(res => {
                    setProjects(res.data)
                    console.log(projects)})
                .catch(err => console.log(err))  
        }
        
    }, [projectsChange, user])

    const checkProjects = (projects) => {
        if(projects.length > 0) {
            return projects.map(project => {
                return(
                    <div key={project.name}>{project.name}</div>
                )
            })
        } else {
            return(
                <div>
                    <h2>You have no Projects yet, click the button below to create a new project.</h2>
                    <CreateProjectButton setProjectsChange={setProjectsChange}/>
                </div>
            )
        }
    }

    return (
        <div>
            Projects:
            {
                projects ?
                checkProjects(projects)
                
                :
                <h2>Loading...</h2>
            }
            <CreateProjectButton setProjectsChange={setProjectsChange}/>
        </div>
    )
}

export default Projects