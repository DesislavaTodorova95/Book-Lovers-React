import React, {
  useContext,
  
  useState,
} from "react/cjs/react.development";
import "./AddBookForm.css";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import imageBook from "./static/bookThought.jpg";
import { Redirect } from "react-router-dom";
const AddBookForm = () => {
  const [ userInfo ] = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [addedBook, setAddedBook] = useState("");
  const [ setValue ] = useContext(ErrorsContext);

  const onAddBookSubmit = async (e) => {
    e.preventDefault();
    const addedBy = userInfo.userId;

    const book = { title, author, genre, description, imageUrl, addedBy };

    const bookAdded = await axios
      .post("https://murmuring-cliffs-61613.herokuapp.com/books/create", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: book,
      })
      .catch((error) => {
        if (error.response.data.message) {
          setValue(error.response.data.message);
        } else {
          console.log(error);
          setValue(error.response.datamessage);
        }
      });
    if (bookAdded) {
      setAddedBook(bookAdded);
    }
  };

  if (!userInfo) {
    return <Redirect to="/" />;
  }
  if (addedBook) {
    return <Redirect to="/books/allBooks" />;
  }
  return (
    <>
      <form id="addBookForm" onSubmit={onAddBookSubmit}>
        <div className="book-box">
          <h1 className="addHead">Add Book</h1>
          <p>
            <label htmlFor="title">Book Title</label>
            <input
              className="addInput"
              name="title"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="author">Book Author</label>
            <input
              className="addInput"
              type="text"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </p>

          <p>
            <label htmlFor="genre">Book Genre</label>
            <input
              className="addInput"
              name="genre"
              type="text"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="imageUrl">Book Image</label>
            <input
              className="addInput"
              name="imageUrl"
              type="text"
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="description">Book Description</label>
            <textarea
              name="description"
              cols="30"
              rows="7"
              className="descriptionAdd"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </p>
          <button type="submit" form="addBookForm" className="addBtnSubmit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </div>
      </form>
      <div className="imgSectionAdd">
        <img src={imageBook} alt="Book-Thought"></img>
      </div>
    </>
  );
};

export default AddBookForm;
