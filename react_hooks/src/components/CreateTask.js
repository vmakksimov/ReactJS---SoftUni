import {useEffect, useState} from 'react'

export const CreateTask = ({createTaskHanlder}) => {

    const [tasks, setTask] = useState('');


    const changeTask = (e) => {
        setTask(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        createTaskHanlder(tasks)
        setTask('')

    }

    return (

        <form onSubmit={onSubmit}>
           
            <input type='text' name='task' value={tasks} onChange={changeTask}></input>
            <input type="submit" value='Add' />
        </form>
    )
}