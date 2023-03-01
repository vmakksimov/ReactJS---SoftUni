import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul type='none'>
                <li><NavLink to='/' style={({isActive}) => ({
                    background: isActive ? 'lightblue' : 'red'
                })}>Home</NavLink></li>
                
                <li><NavLink to='/about'>About</NavLink></li>


                <li><Link to='/products/10'>Product</Link></li>
                <li><Link to='/millenium-falcon'>Milenium Falcon</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;