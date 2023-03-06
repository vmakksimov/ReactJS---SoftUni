import { useParams, useNavigate } from "react-router-dom"
import {useState ,useEffect} from 'react'

import {useContext} from 'react'
import { GameContext } from "../../contexts/GameContext"
import * as gameService from '../../services/gameService'

export const EditPage = () => {
    const [currentGame, setGame] = useState();

    const {} = useContext(GameContext)

    const {gameId} = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(gameData => {
                setGame(gameData)
            })
                     
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        const GameData = Object.fromEntries(new FormData(e.target))

        // console.log(GameData)
    }
    
    return (
        <section id="edit-page" className="auth">
                <form id="edit"  onSubmit={onSubmit}>
                    <div className="container">
                        <h1>Edit Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" defaultValue={currentGame.title} />
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" defaultValue={currentGame.category} />
                        <label htmlFor="levels">MaxLevel:</label>
                        <input
                            type="number"
                            id="maxLevel"
                            name="maxLevel"
                            min={1}
                            defaultValue=""
                        />
                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentGame.imageUrl} />
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" defaultValue={currentGame.summary} />
                        <input className="btn submit" type="submit" defaultValue="Edit Game" />
                    </div>
                </form>
            </section>
    )
}