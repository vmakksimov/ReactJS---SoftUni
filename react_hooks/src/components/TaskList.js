import { TaskItem } from "./TaskItem"

export const TaskList = ({
    task,
  
}) => {
    return (
        <ul type="none">
            {task.map(x => <TaskItem
                key={x._id}
                item={x.title}
         
                taskId={x._id}
            />)}
        </ul>
    )
}