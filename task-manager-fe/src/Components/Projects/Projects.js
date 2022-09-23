import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../../App";
import CreateProjectButton from "./CreateProjectButton";
import Project from "./Project";
import '../../Styles/Projects.css'
import { useLocation } from "react-router-dom";


const Projects = () => {
    const [projects, setProjects] = useState()
    const [projectsChange, setProjectsChange] = useState(false)
    const {user} = useContext(UserContext)
    const location = useLocation()

    useEffect(() => {
        if(user && user.id){
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
                </div>
            )
        }
    }

    return (
        <div className='projects--container'>
            {
                location.pathname === '/projects' ?
                <h1>Projects</h1>
                :
                <h2 style={{fontSize: '2.5rem'}}>Projects</h2>
            
            }
            {
                projects ?
                checkProjects(projects)
                
                :
                <h2 className="noProjects">No Projects yet</h2>
            }
            <CreateProjectButton setProjectsChange={setProjectsChange}/>
        </div>
    )
}

export default Projects