import React, { useState, useEffect } from "react";
import Book from "./Book.jsx";
import "./ListCSS.css";
import axios from "axios";

function List(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/books');
                console.log(response)
                setBooks(response.data);

            } catch (error) {
                console.error('Error fetching books:', error);
                console.log('Full error details:', error);
            }
        };

        fetchBooks();
    }, []);

    const userList = books.map((book) => (
        <Book key={book._id} book={book} />
    ));

    return (
        <div className="UsersList">
            <div className="row">{userList}</div>
        </div>
    );
}

export default List;
