
import './App.css';
import {useState, useEffect} from 'react'
import * as GameService from './services/gameService'
import { AuthContext } from './contexts/AuthContext';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { EditPage } from './components/EditPage/EditPage';
import { Catalog } from './components/Calatog/Catalog';
import { GameDetails } from './components/GameDetails/GameDetails';
import { Error404 } from './components/404/Error404';
import { Logout } from './components/Logout/Logout';
import { useLocalStorage } from './hooks/useLocalStorage';
import uniqid from 'uniqid'

function App() {


    const [games, setGames] = useState({})
    const [auth, setAuth] = useLocalStorage('key', {})

    const navigate = useNavigate()

    const userLogin = (authData) => {
        setAuth(authData)
    }

    const userLogout = () => {
        setAuth({})
    }

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(x => x._id == gameId);
            const comments = game.comments || [];
            comments.push(comment)

            return [
                ...state.filter(x => x._id !== gameId),
                {...game, comments}
                
            ]
        })
    }

   

    const AddGameHandler = (GameData, id) => {
        
        setGames(state => [
            ...state,
            {...GameData,
            _id: uniqid()}
        ])

        navigate('/catalog')
    }

    useEffect(() => {
        GameService.getAll()
            .then(result => setGames(result))
    }, [])

    

    return (
        <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
        <div id="box">
            <Header />
            {/* Main Content */}
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home games={games} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create AddGameHandler={AddGameHandler} />} />
                    <Route path='/edit' element={<EditPage />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                    <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment}/>} />
                    <Route path='/404' element={<Error404 />} />
                </Routes>
            </main>

        </div>
        </AuthContext.Provider>

    );
}

export default App;
