import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/addBook'>Add Book</Link>
            <Link to='/editBook'>Edit Book</Link>
            <Link to='/showBook'>Show Book</Link>
        </div>
    );
};

export default Nav;