
import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'f',
        userType: 'corporate',
        tac: false,

    })

    const inputRef = useRef();

    useEffect(() => {
        if (values.username && values.age){
            inputRef.current.value = `${values.username}+${values.age} xoxo`
        }
    }, [values.username, values.age])


    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name] : e.target.type == 'checkbox' ? e.target.checked : e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    const checkboxHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name] : e.target.checked
        }))
    }



    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input id='username' type='text' name='username' value={values.username} onChange={changeHandler}/>
                        
                    </div>
                    <div>
                        <label htmlFor='username'>Password:</label>
                        <input id='password' type='password' name='password' value={values.password} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor='age'>Age:</label>
                        <input id='age' type='text' name='age' value={values.age} onChange={changeHandler}/>
                    </div>
                    <div>
                    <label htmlFor='individual-user-type'>Individual:</label>
                        <input id='pindividual-user-type' type='radio' name='userType' value='individual' onChange={changeHandler}/>
                    </div>
                    <div>
                    <label htmlFor='tac'>Terms and Cond:</label>
                        <input id='tac' type='checkbox' name='tac' checked={values.tac} onChange={checkboxHandler}/>
                    </div>
                    <div>
                        <input type='submit' value='Register' disabled={!values.tac}/>
                    </div>
                    <div>
                        <label htmlFor='uncotrolled-input'>Uncontrolled input</label>
                        <input id='uncotrolled-input' name='uncotrolled-input' type='text' ref={inputRef}/>
                    </div>
                    
                </form>
            </header>
        </div>
    );
}

export default App;
