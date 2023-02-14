import { useEffect, useState } from "react"
import styles from './Book.module.css'
export const Book = (props) => {

    const [highlighted, setHighlighted] = useState(false)
    const [marked, setMarked] = useState(false)

    useEffect(() => {
        console.log('Mounting')
    }, [])

    useEffect(() => {
        console.log('Updating');

    }, [highlighted])

    const clickHandler = () => {
        setHighlighted(highlighted => !highlighted);
       
    }

    const markHandler = () => {
        setMarked(true);
    }

    const style = {};

    if (highlighted){
        style.backgroundColor = 'blue';
    }

    if (marked){
        style.backgroundColor = 'red';  
    }

    return (
        <li style={style} className={styles['book-item']}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>Price: {props.price}</div>
                <footer>
                    <span>Author: {props.author}</span>
                    <button onClick={clickHandler}>Highlighted</button>
                    <button onClick={markHandler}>Marked</button>
                </footer>
            </article>
        </li>
    )
}

// export default Book;