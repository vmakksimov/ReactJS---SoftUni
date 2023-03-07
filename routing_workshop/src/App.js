
import './App.css';
import {useState, useEffect} from 'react'
import * as GameService from './services/gameService'
import { AuthContext } from './contexts/AuthContext';
import { GameContext } from './contexts/GameContext';
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
import uniqid from 'uniqid';

function App() {


    const [games, setGames] = useState([])
    const [auth, setAuth] = useLocalStorage('auth', {})

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
   

    const AddGameHandler = (gameData) => {
        setGames(state => [
            ...state,
            gameData,
        ])

        navigate('/catalog')
    }

    const gameEdit = (gameId, gameData) => {
        setGames(state => state.map(x => x._id === gameId ? gameData : x))
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
            <GameContext.Provider value={{games, AddGameHandler, gameEdit}}>
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home games={games} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create  />} />
                    <Route path='/catalog/edit/:gameId' element={<EditPage />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                    <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment}/>} />
                    <Route path='/404' element={<Error404 />} />
                </Routes>
            </main>
            </GameContext.Provider>

        </div>
        </AuthContext.Provider>

    );
}

export default App;
