import { useParams, useNavigate } from "react-router-dom"
import {useState ,useEffect} from 'react'

const Products = () => {
    const [starship, setShip] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${params.productId}/`)
            .then(state => state.json())
            .then(res => {
                setShip(res)
            })
    }, [params.productId])

    const nextHandler = () => {
        navigate(`/products/${Number(params.productId) +1 }`)
    }
    return (
        <>
        <h2>Products Page</h2>

        <h3>Products {params.productId} Specification</h3>

        <ul>
            <li>Name: {starship.name}</li>
            <li>Model: {starship.model}</li>
            <button onClick={nextHandler}>Next</button>
        </ul>
       
        </>
    )
}

export default Products;