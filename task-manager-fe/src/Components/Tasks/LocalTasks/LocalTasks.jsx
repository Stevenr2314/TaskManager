import React, { useEffect, useState } from 'react'
import '../../../Styles/Tasks.css'
import Checkbox from '../Checkbox'
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
          console.log('creating new LocalTasks ')
          localStorage.setItem('localTasks', '[]')
        }
    }, [])

    const handleCheckbox = (task) => {
      task.completed = !task.completed
    }

    const handleSaveChanges = () => {
      localStorage.setItem('localTasks', JSON.stringify(localTasks))
    }

  return (
    <div>
      <ul className="tasksContainer">
            {
                localTasks && localTasks.length > 0 ?
                localTasks.map((task, index) => {
                  if(task.completed === true) return null
                  return ( 
                    <li key={index} className='taskWrapper'>
                      <Checkbox onClick={() => handleCheckbox(task)}/>
                      <LocalTask task={task}/>
                    </li>
                  )})
                :
                <div> No tasks yet</div>
            }
      </ul>
      <button onClick={()=>handleSaveChanges()}>Save Changes</button>
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
    </div>
  )
}

export default LocalTasks