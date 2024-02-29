import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBooks } from "./bookslice";


const EditBooks = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const [name, setName] = useState(location.state.name)
    const [author, setAuthor] = useState(location.state.author);

    const dispatch = useDispatch()

    const hnadleSubmit = (e) => {
        e.preventDefault();

        const editData = {
            id: location.state.id,
            name,
            author
        };

        dispatch(editBooks(editData));

        if(editData){
            navigate('/showBook')
        }
        
    }

    return (
        <div>
            <h2>Edit Books</h2>
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

export default EditBooks;