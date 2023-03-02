
import './App.css';
import {useState, useEffect} from 'react'
import * as GameService from './services/gameService'
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { EditPage } from './components/EditPage/EditPage';
import { Catalog } from './components/Calatog/Catalog';
import { GameDetails } from './components/GameDetails/GameDetails';
import uniqid from 'uniqid'

function App() {


    const [games, setGames] = useState({})
    const navigate = useNavigate()

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

    console.log(games)

    return (
        <div id="box">
            <Header />
            {/* Main Content */}
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home games={games} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create AddGameHandler={AddGameHandler} />} />
                    <Route path='/edit' element={<EditPage />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                    <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment}/>} />
                </Routes>
            </main>

        </div>

    );
}

export default App;
