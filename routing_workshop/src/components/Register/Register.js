import { Link } from "react-router-dom"
import {useContext} from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import * as AuthService from '../../services/authService'

export const Register = () => {

    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault()  
        

        const data = new FormData(e.target)
        const email = data.get('email')
        const password = data.get('password')
        const confirmPassword = data.get('confirm-password')

        console.log(password)
        console.log(confirmPassword)

        if (password !== confirmPassword){
            return;
        }

    

        AuthService.register(email, password)
            .then(authData => {
                console.log(authData)
                userLogin(authData)
                navigate('/')
            })
    }

    return (
        <section id="register-page" className="content auth">
                <form id="register" onSubmit={onSubmit}>
                    <div className="container">
                        <div className="brand-logo" />
                        <h1>Register1</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="maria@email.com"
                        />
                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                        <input className="btn submit" type="submit" defaultValue="Register" />
                        <p className="field">
                            <span>
                                If you already have profile click <Link href="/register">here</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </section> 
    )
}