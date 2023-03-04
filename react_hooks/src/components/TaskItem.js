import {useContext} from 'react';
import { TaskContext } from '../contexts/TaskContexts';

export const TaskItem = ({item, taskId}) => {
    const { removeHandler } = useContext(TaskContext);
    return (
        <li>
            {item}
            <button onClick={() => removeHandler(taskId)}>X</button>
        </li>
    )
}