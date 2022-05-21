import React, {useEffect, useState} from "react";

const dummyTasks = [
    {
        title: 'Big Task',
        description: 'Some kind of med length description',
        dueDate: 'Tomorrow'
    },
    {
        title: 'Big Task 2',
        description: 'Small description',
        dueDate: '2 Days'
    },
    {
        title: 'Big Task 3',
        description: 'A long explanation of tasks and whatnot, probably going to be as long as I can type for so that I can see how long it goes',
        dueDate: '3 Days'
    },
]

const Task = () => {
    const [tasks, setTasks] = useState(dummyTasks)
    return(
        <>
          {
              tasks.map((task, index) => {return (
                  <div key={index}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                  </div>
              )})
          }
        </>
    )
}
export default Task