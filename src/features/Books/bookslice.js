import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books: [
        { id: uuidv4(), name: "Love Bangladesh", author: "akil injamam" },
        { id: uuidv4(), name: "Tourism In Chittagong", author: "akil injamam" },
    ]
}


export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, actions) => {
            state.books = [...state.books, actions.payload]
        },
        deleteBooks: (state, actions) => {
            const id = actions.payload;
            state.books = state.books.filter((book) => book.id !== id)
        },
        editBooks: (state, actions) => {

            const { id, name, author } = actions.payload
            console.log(name)
            const data = state.books.filter(data => data.id === id);
            data[0].name = name;
            data[0].author = author
        }
    }
})


export const { showBooks, addBooks, deleteBooks, editBooks } = booksSlice.actions

export default booksSlice.reducer