import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'

const Products = () => {
    const [starship, setShip] = useState({})
    
    const params = useParams()

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${params.productId}/`)
            .then(state => state.json())
            .then(res => {
                setShip(res)
            })
    }, [])
    return (
        <>
        <h2>Products Page</h2>

        <h3>Products {params.productId} Specification</h3>

        <ul>
            <li>Name: {starship.name}</li>
            <li>Model: {starship.model}</li>
          
        </ul>
        </>
    )
}

export default Products;