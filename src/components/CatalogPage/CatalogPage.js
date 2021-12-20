import { useState, useEffect } from "react";

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
      <h1 className="catalog-head">All Books</h1>
       {(books.length<0 ) ?<p className="LackOfBookS">There are no added books yet</p> : books.sort((a, b)=> {return a.title.localeCompare(b.title)}).map((book)=><Book key={book._id} {...book} />)  }
        <style jsx>{`
        .catalog-head {
          text-transform: capitalize;
          width: 100%;
          border-bottom: 4px ridge #551a8b;
          background-color: #fbedd2;
          margin-top: 0;
          padding-left: 30px;
          color: #551a8b;
          font-family: "Brush Script MT", cursive;
        }
        .book-list {
          display: block;
        }
        .LackOfBookS{
          text-transform: capitalize;
          font-family: "Brush Script MT", cursive;
          text-align: center;
          font-size: 30px;
          font-style: bold;
          color: #fbedd2;
        }
      `}</style>
    </div>
  );
};
  
export default CatalogPage;
