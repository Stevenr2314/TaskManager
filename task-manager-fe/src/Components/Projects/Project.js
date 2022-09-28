import React, { useState } from "react";
import axios from "axios";
import {Modal, ModalContents, ModalDismissAsyncButton, ModalDismissButton, ModalOpenButton} from '../../Tools/Modal'
import UpdateProjectForm from "./UpdateProjectForm";
import Tasks from "../Tasks/Tasks";
import Checkbox from "../Tasks/Checkbox";

const Project = props => {
    const {project, setProjectsChange} = props
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleDelete = id => {
        return axios.delete('http://localhost:5001/projects', {data: {id}})
            .then(resp => {
                setProjectsChange(true)
                return resp.data.message})
            .catch(err => console.log(err))
    }

    const handleCheckbox = () => {
        axios.put(`http://localhost:5001/projects/${project.id}`)
            .then(resp => setProjectsChange(true))
            .catch(err => console.log(err))
    }

    return (
        <li className="project--container">
            <div className="project">
                <div className="toggle--container" onClick={e => setIsDropdownOpen(!isDropdownOpen)}>
                    <div className={`toggle ${isDropdownOpen ? 'active':''}`}>
                        <span>&#62;</span>
                    </div>
                </div>
                <Checkbox initialValue={project.archived} onClick={() => handleCheckbox()}/>

                <section className="project--info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <h4>{project.created_at}</h4>
                </section>
                
                
                <div className="project--buttons">
                    <Modal>
                        <ModalOpenButton>
                            <button>Delete</button>
                        </ModalOpenButton>
                        <ModalContents title='Confirm Delete?'>
                            <ModalDismissAsyncButton>
                                <button onClick={() => handleDelete(project.id)}>Yes</button>
                            </ModalDismissAsyncButton>
                            <ModalDismissButton>
                                <button>No</button>
                            </ModalDismissButton>
                        </ModalContents>
                    </Modal>

                    <Modal>
                        <ModalOpenButton>
                            <button>Update</button>   
                        </ModalOpenButton>
                        <ModalContents title='Update project'>
                            <UpdateProjectForm setProjectsChange={setProjectsChange} project={project}/>
                        </ModalContents>
                    </Modal>
                </div>
            </div>
            {isDropdownOpen && <Tasks projectId={project.id}/>}
        </li>
        
    )
}

export default Project