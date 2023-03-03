export const TaskItem = ({item, removeHandler, taskId}) => {
    return (
        <li>
            {item}
            <button onClick={() => removeHandler(taskId)}>X</button>
        </li>
    )
}