import { Book } from "./Book"

export const BookList = (props) => {
   
    return (
        <ul>
            {props.books.map(x => <Book {...x}/>)}
        </ul>
    )
}

// export default BookList;