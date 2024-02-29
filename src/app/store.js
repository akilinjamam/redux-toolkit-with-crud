import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../features/Books/bookslice';

const store = configureStore({
    reducer: {
        booksReducer,
    }
})


export default store;