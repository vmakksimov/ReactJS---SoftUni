
import './App.css';
import { TaskList } from './components/TaskList';
import { CreateTask } from './components/CreateTask';

import { useEffect} from 'react'
import { useFetch } from './hooks/useFetch';
import { useTodos } from './hooks/useTodos';

function App() {

    const [task, setTask, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', [])
    const { removeTodo } = useTodos();
    // const [task, setTask] = useState([
    //     {
    //         _id: 1, title: 'first'
    //     },
    //     {
    //         _id: 2, title: 'second'
    //     },
    //     {
    //         _id: 3, title: 'third'
    //     },
    // ])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')

            .then(res => res.json())
            .then(result => { setTask(Object.values(result)) })
    }, [])

    const createTaskHanlder = (newTask) => {
        setTask(state => [
            ...state,
            { _id: state[state.length - 1]._id + 1, title: newTask }
        ]);
    }

    const removeHandler = (taskId) => {
        removeTodo(taskId)
            .then(() => {
                setTask(state => state.filter(x => x._id !== taskId))
            })
}

return (
    <div className="App">
        <header>
            <h1>TODO App</h1>
        </header>
        <main>
            {isLoading
                ? <p>Loading...please wait</p>
                : <TaskList task={task} removeHandler={removeHandler} />
            }

            <CreateTask createTaskHanlder={createTaskHanlder} />
        </main>
    </div>
);
}

export default App;
