import { TaskItem } from "./TaskItem"

export const TaskList = ({
    task,
    removeHandler
}) => {
    return (
        <ul type="none">
            {task.map(x => <TaskItem
                key={x._id}
                item={x.title}
                removeHandler={removeHandler}
                taskId={x._id}
            />)}
        </ul>
    )
}