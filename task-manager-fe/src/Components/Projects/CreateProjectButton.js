import React from "react";
import { Modal, ModalContents, ModalDismissButton, ModalOpenButton } from "../../Tools/Modal";
import CreateProjectForm from "./CreateProjectForm";


const CreateProjectButton = props =>{
    return(
        <Modal>
            <ModalOpenButton>
                <button className="createProject--button">Create Project</button>
            </ModalOpenButton>
            <ModalContents title='Create Project'>
                <CreateProjectForm setProjectsChange={props.setProjectsChange}/>
                <ModalDismissButton><button>Cancel</button></ModalDismissButton>
            </ModalContents>
        </Modal>
    )
}

export default CreateProjectButton