import React from "react";
import { Modal, ModalContents, ModalDismissButton, ModalOpenButton } from "../../Tools/Modal";
import CreateProjectForm from "./CreateForm";


const CreateProjectButton = props =>{
    return(
        <Modal>
            <ModalOpenButton>
                <span>Create Project</span>
            </ModalOpenButton>
            <ModalContents>
                <CreateProjectForm setProjectsChange={props.setProjectsChange}/>
                <ModalDismissButton><button>Cancel</button></ModalDismissButton>
            </ModalContents>
        </Modal>
    )
}

export default CreateProjectButton