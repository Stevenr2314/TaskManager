import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../../App";
import CreateProjectButton from "./CreateProjectButton";
import Project from "./Project";
import '../../Styles/Projects.css'


const Projects = () => {
    const [projects, setProjects] = useState()
    const [projectsChange, setProjectsChange] = useState(false)
    const {user} = useContext(UserContext)

    useEffect(() => {
        console.log('Before user id check in Projects')
        if(user.id){
            axios.get(`http://localhost:5001/projects/?id=${user.id}`)
                .then(res => {
                    setProjects(res.data)
                    setProjectsChange(false)})
                .catch(err => console.log(err))  
        }
        
    }, [projectsChange, user])

    const checkProjects = (projects) => {
        if(projects.length > 0) {
            return (
                <ul className="projects">
                    {projects.map(project => {
                    return(
                        <Project key={project.id} project={project} setProjectsChange={setProjectsChange}/>
                    )})}
                </ul>
                
            )
        } else {
            return(
                <div className="noProjects">
                    <h2>You have no Projects yet, click the button below to create a new project.</h2>
                    <CreateProjectButton setProjectsChange={setProjectsChange}/>
                </div>
            )
        }
    }

    return (
        <div className="projects--container">
            <h1>Projects</h1>
            <CreateProjectButton setProjectsChange={setProjectsChange}/>
            {
                projects ?
                checkProjects(projects)
                
                :
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default Projects