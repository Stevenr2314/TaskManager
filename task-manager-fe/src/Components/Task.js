import React, {useEffect, useState} from "react";
import axios from "axios";

const Task = () => {
    const [tasks, setTasks] = useState()

    useEffect(() => {
        axios.get('http://localhost:5001/tasks')
            .then(res => {
                setTasks(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return(
        <>
          {
              tasks ?
              tasks.map((task, index) => {return (
                  <div key={index}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                  </div>
              )})
              :
              <div> Loading</div>
          }
        </>
    )
}
export default Task