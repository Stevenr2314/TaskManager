import React, { useEffect, useState } from 'react'
import '../../../Styles/Tasks.css'
import CreateLocalTaskForm from './CreateLocalTaskForm'
import {Modal, ModalContents, ModalDismissButton, ModalOpenButton} from '../../../Tools/Modal'
import LocalTask from './LocalTask'

function LocalTasks() {
    const [localTasks, setLocalTasks] = useState([])
    let parsedTasks = null

    useEffect(() => {
        if(localStorage.getItem('localTasks') !== undefined ){
          parsedTasks = JSON.parse(localStorage.getItem('localTasks'))
          if(parsedTasks && parsedTasks.length > 0){
            setLocalTasks(parsedTasks)
          }
        } else {
          localStorage.setItem('localTasks', '[]')
        }
    }, [])

    

    const handleSaveChanges = () => {
      localStorage.setItem('localTasks', JSON.stringify(localTasks))
    }

  return (
      <ul className="tasksContainer">
            {
                localTasks && localTasks.length > 0 ?
                localTasks.map((task, index) => {
                  if(task.completed === true) return null
                  return ( 
                    <LocalTask key={index} task={task}/>
                  )})
                :
                <div className="noTasks"> No tasks yet</div>
            }
            <div>
              <Modal>
                <ModalOpenButton>
                  <button>Create Task</button>
                </ModalOpenButton>
                <ModalContents title={'Create New Task'}>
                    <CreateLocalTaskForm localTasks={localTasks} setLocalTasks={setLocalTasks}/>
                    <ModalDismissButton>
                      <button>Cancel</button>
                    </ModalDismissButton>
                </ModalContents>
              </Modal>
              <button onClick={()=>handleSaveChanges()}>Save Changes</button>
            </div>
            
      </ul>
  )
}

export default LocalTasks