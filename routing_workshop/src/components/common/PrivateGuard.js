import { AuthContext } from "../../contexts/AuthContext";
import {useContext} from 'react'
import { Navigate, Outlet } from "react-router-dom";


export const PrivateGuard = () => {

    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated){
        return <Navigate to='/login' replace/>
    }

    return <Outlet/>

}