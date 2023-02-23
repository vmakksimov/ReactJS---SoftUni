import { useEffect, useState } from "react";

const CharacterList = () => {
    const [characters, highlighted] = useState([])

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
        .then(res => res.json())
        .then(result => {
            highlighted(result.results)
        })
    }, [])

    return (
        <ul>
            {!characters.length && <li>Loading....</li>}
            {characters.map(x => (
                <li key={x.name}>{x.name}</li>
            ))}
        </ul>
    )
}

export default CharacterList;