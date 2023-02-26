import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul type='none'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products/10'>Product</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;