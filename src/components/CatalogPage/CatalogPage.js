import React, { useState, useEffect } from "react";
import './CatalogPage.css'
import baseUrl from "../../services/api";
import Book from "../Book/Book";

const CatalogPage = () => {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetch(`${baseUrl}/books`)
      .then((res) => res.json())
      .then((result) => setBooks(result));
  }, []);
  
  return (
    <div className="book-list">
    <h1 className="catalog-head">{books.length< 1 ? 'There are no books yet..' : 'All Books'}</h1>
       {books.sort((a, b)=> {return a.title.localeCompare(b.title)}).map((book)=><Book key={book._id} {...book} />)  }
        
      
      
    </div>
  );
};
  
export default CatalogPage;
