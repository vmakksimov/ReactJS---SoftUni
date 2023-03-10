import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import * as gameService from '../../services/gameService'
import { AuthContext } from "../../contexts/AuthContext";
import { GameContext } from "../../contexts/GameContext";

export const GameDetails = ({addComment}) => {

    const { user } = useContext(AuthContext)
    // const {addComment} = useContext(GameContext)

    const navigate = useNavigate();

    const { gameId } = useParams();

    const [currentGame, setCurrentGame] = useState({});

    const [comment, setComment] = useState({
        comment: '',
        gameId: ''
    });

    const [errors, setError] = useState({
        message: ''
    })

    useEffect(() => {
        gameService.getOne(gameId)

            .then(state => {
                setCurrentGame(state)
            })
    }, [])



    // const game = games.find(x => x._id == gameId);


    const addCommentHandler = (e) => {
        e.preventDefault()

        const gameData = Object.fromEntries(new FormData(e.target))

        gameData['_id'] = gameId

        console.log(gameData)
        
        addComment(gameId, `${comment.comment}`)
        gameService.comment({gameId, comment})
            .then(res => {
                console.log(res)
            })
    }

    const onChange = (e) => {

        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }

        ))
    }

    const onBlur = (e) => {
        const text = e.target.value
        let errormessage = ''

        if (text.length < 2) {
            errormessage = 'The symbols must be minimum 2'

        } else if (text.length > 10) {
            errormessage = 'The symbols must be maximum 10'
        }

        setError(state => ({
            ...state,
            message: errormessage

        }))

    }

    const onDeleteHandler = () => {


         const confirmation = window.confirm('Are you sure you want to delete this game?')

        if (confirmation){
            gameService.remove(gameId)
            navigate('/')
        }
      


    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} alt='some image' />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">
                    {currentGame.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        {currentGame.comments?.map(x =>
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )}

                    </ul>
                    {!currentGame.comments
                        ? <p className="no-comment">No comments.</p>
                        : ''
                    }

                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}

                {user._id === currentGame._ownerId &&
                    <div className="buttons">

                        <Link to={`/catalog/edit/${gameId}`} className="button">
                            Edit
                        </Link>
                        <button className="button" onClick={onDeleteHandler}>
                            Delete
                        </button>
                    </div>

                }

            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea
                        name="comment"

                        placeholder='Comment...'
                        onBlur={onBlur}
                        onChange={onChange}
                        value={comment.comment}

                    />

                    {errors.message &&
                        <div style={{ color: 'red' }}>{errors.message}</div>}

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    )
}