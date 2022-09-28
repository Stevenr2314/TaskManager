import React, { useEffect, useState } from 'react'
import '../../../Styles/Tasks.css'
import CreateLocalTaskForm from './CreateLocalTaskForm'
import {Modal, ModalContents, ModalDismissButton, ModalOpenButton} from '../../../Tools/Modal'
import LocalTask from './LocalTask'
import Checkbox from "../Checkbox";

function LocalTasks() {
    const [localTasks, setLocalTasks] = useState([])
    const [displayAllTasks, setDisplayAllTasks] = useState(false)
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

    const updateChanges = (taskIndex, task) => {
        const newArray = [...localTasks]
        newArray[taskIndex] = task
        setLocalTasks(newArray)
    }

    const handleDelete = (taskIndex) => {

        const newArray = [...localTasks]
        setLocalTasks(newArray.splice(taskIndex, 1))
    }
    

    const handleSaveChanges = () => {
      localStorage.setItem('localTasks', JSON.stringify(localTasks))
    }

  return (
      <ul className="tasksContainer">
            {
                localTasks && localTasks.length > 0 ?
                localTasks.map((task, index) => {
                    if(!displayAllTasks){
                        if(task.completed) return null
                    }
                  return ( 
                    <LocalTask key={index} taskIndex={index} task={task} updateChanges={updateChanges} handleDelete={handleDelete}/>
                  )})
                :
                <div className="noTasks"> No tasks yet</div>
            }
            <div>
                <label htmlFor='toggleDisplayTasks'>Show Completed Tasks</label>
                <Checkbox name='toggleDisplayTasks' onClick={() => setDisplayAllTasks(!displayAllTasks)}/>
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