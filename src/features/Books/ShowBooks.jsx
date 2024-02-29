import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "./bookslice";
import { Link } from "react-router-dom";



const ShowBooks = () => {
    const books = useSelector(state => state.booksReducer.books);

    const dispatch = useDispatch();

    const deleteBook = (value) => {
      dispatch(deleteBooks(value))
    }

    return (
        <div>
            <h2>List of Books:</h2>
            <table>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>BOOKS</th>
                        <th>AUTHOR</th>
                        <th>MODIFY</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books?.map((data, index) => {
                        const {id, name, author} = data;

                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td>
                                    <Link to='/editBook' state={{id, name, author}}>
                                    <button>Edit</button>
                                    </Link>
                                    <button onClick={() => deleteBook(id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ShowBooks;