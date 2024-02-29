import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "./bookslice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('');

    
    const dispatch = useDispatch();

    const hnadleSubmit = (e) => {
        e.preventDefault();

        const bookData = {
            id: uuidv4(),
            name,
            author
        }

        dispatch(addBooks(bookData))

        if(bookData){
            navigate('/showBook')
        }
    }

    return (
        <div>
            <h2>Add Books</h2>
            <form onSubmit={hnadleSubmit}>
            <label htmlFor="bookName">Book Name:</label>
            <input type="text" id="bookName" value={name} required
            onChange={(e) => {setName(e.target.value)}}
            />

            <label htmlFor="author">Author:</label>
            <input type="text" id="author" value={author} required 
             onChange={(e) => {setAuthor(e.target.value)}}
            />
            <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default AddBooks;