import React, { useState, useEffect } from "react";

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
        <style jsx>{`
          .book-list{
            display: block;
            margin-top: 100px;
          }
        .catalog-head {
          margin-top:100px;
        
          text-transform: capitalize;
          width: 100%;
          position: absolute;
          border-bottom: 4px ridge #3D1C0B;
          background-color: #FFE4C4;
          margin-top: 0;
          padding-left: 30px;
          color: #3D1C0B;
          font-family: "Brush Script MT", cursive;
        }
       
        .LackOfBookS{
          display: block;
            margin-top: 100px;
          text-transform: capitalize;
          font-family: "Brush Script MT", cursive;
          text-align: center;
          font-size: 30px;
          font-style: bold;
          color: #FFE4C4;
        }
      `}</style>
    </div>
  );
};
  
export default CatalogPage;
