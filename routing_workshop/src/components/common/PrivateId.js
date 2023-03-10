import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from 'react'
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";



export const GameOwner = ({ children }) => {

    const { gameId } = useParams();
    const navigate = useNavigate()

    const { user, isAuthenticated } = useContext(AuthContext)
    const { games, selectGame } = useContext(GameContext)



    const currentGame = selectGame(gameId)
   

    console.log(!isAuthenticated)
    console.log(user._id !== currentGame._ownerId)

    if (!isAuthenticated || user._id !== currentGame._ownerId) {
        console.log('works')
        return navigate('/catalog', { replace: true })
    }


    return children ? children : <Outlet />

}