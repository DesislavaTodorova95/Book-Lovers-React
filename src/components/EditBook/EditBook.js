import axios from "axios";
import React, { useContext, useEffect, useState } from "react/cjs/react.development";
import baseUrl from "../../services/api";
import bookServices from "../../services/bookServices";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import imageBooks from "./static/books.jpg";
import './EditBook.css'
const EditBook = ({ match, history }) => {
  const [ userInfo,  ] = useContext(UserContext);
  const [book, setBook] = useState("");
  const [ setValue ] = useContext(ErrorsContext);
  const [, setToken] = useState("");

  useEffect(() => {
    if (userInfo) {
      bookServices
        .getOne(match.params.bookId)
        .then((res) => setBook(res))
        .catch((error) => console.log(error));
    } else {
      history.push("/books/allBooks");
    }
  }, [match.params.bookId, userInfo, history]);

  const onEditSubmitHandler = async (e) => {
    e.preventDefault();
    if (!userInfo) {
      history.push("/");
    }
    try {
      const accessToken = userInfo.token;
      setToken(accessToken);
      console.log(accessToken);
      const bookId = match.params.bookId;
      const updatedBook = {
        ...book,
        title: e.target.title.value,
        author: e.target.author.value,
        genre: e.target.genre.value,
        imageUrl: e.target.imageUrl.value,
        description: e.target.description.value,
      };

      const editedBook = await axios
        .put(`${baseUrl}/books/edit/${bookId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: updatedBook,
        })
        .catch((error) => {
          if (error.response.data.message) {
            setValue(error.response.data.message);
          } else {
            console.log(error.response.data);
            setValue(error.response.data);
          }
        });
      if (editedBook) {
        history.push(`/books/details/${bookId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (<>
    <form id="editBookForm" onSubmit={onEditSubmitHandler}>
      <div className="book-box-edit">
      <h1 className="editHead">Edit Book</h1>
        <p>
          <label htmlFor="title">Book Title</label>
          <input className="editInput" name="title" type="text" defaultValue={book.title} />
        </p>
        <p>
          <label htmlFor="author">Book Author</label>
          <input className="editInput" name="author" type="text" defaultValue={book.author} />
        </p>

        <p>
          <label htmlFor="genre">Book Genre</label>
          <input className="editInput" name="genre" type="text" defaultValue={book.genre} />
        </p>
        <p>
          <label htmlFor="imageUrl">Book Image</label>
          <input className="editInput" name="imageUrl" type="text" defaultValue={book.imageUrl} />
        </p>
        <p>
          <label htmlFor="description">Book Description</label>
          <textarea
name="description"
            cols="30"
            rows="7"
            defaultValue={book.description}
            className="descriptionEdit"
          ></textarea>
        </p>
        <button type="submit" form="editBookForm" className="editBtnSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </div>
      <div className="EditImgSection">
          <img src={imageBooks} alt="Book-Thought"></img>
      </div>
      </form>
     


    </>
  );
};

export default EditBook;
