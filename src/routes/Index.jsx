import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Nav from "../layout/Nav";
import EditBooks from "../features/Books/EditBooks";
import AddBooks from "../features/Books/AddBooks";
import ShowBooks from "../features/Books/ShowBooks";

const Index = () => {
    return (
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/editBook" element={<EditBooks/>}/>
                <Route path="/addBook" element={<AddBooks/>}/>
                <Route path="/showBook" element={<ShowBooks/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;