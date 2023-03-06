import { useParams } from "react-router-dom"
import { useState } from 'react'
import { Link } from "react-router-dom";

export const GameDetails = ({ games, addComment }) => {

    const params = useParams();

    const [comment, setComment] = useState({
        comment: ''
    });

    const [errors, setError] = useState({
        message: ''
    })

    const game = games.find(x => x._id == params.gameId);


    const addCommentHandler = (e) => {
        e.preventDefault()

        addComment(params.gameId, `${comment.comment}`)
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

        if (text.length < 2){
            errormessage = 'The symbols must be minimum 2'
            
        }else if (text.length > 10){
            errormessage = 'The symbols must be maximum 10'
        }

        setError(state => ({
            ...state,
            message: errormessage
           
        }))


    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                      
                      {game.comments?.map(x => 
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )}
                        
                    </ul>
                    {!game.comments
                    ? <p className="no-comment">No comments.</p> 
                    : ''
                    }
                  
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                
                <div className="buttons">
                    
                    
                    <Link to={`/catalog/edit/${params.gameId}`} className="button">
                        Edit
                    </Link>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
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
                    <div style={{color: 'red'}}>{errors.message}</div>}

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