import { useContext, useState } from "react/cjs/react.development";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import imageBook from './static/bookThought.jpg';
const AddBookForm = ({ history }) => {
  const { userInfo,  } = useContext(UserContext);
  if (!userInfo) {
    history.push("/");
  }
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { setValue } = useContext(ErrorsContext);

  const onAddBookSubmit = async (e) => {
    e.preventDefault();
    const addedBy = JSON.parse(userInfo).userId;

    const book = { title, author, genre, description, imageUrl, addedBy };

    const bookAdded = await axios
      .post("https://murmuring-cliffs-61613.herokuapp.com/books/create", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(userInfo).token}`,
        },
        body: book,
      })
      .catch((error) => {
       
        if(error.response.data.message){
        setValue(error.response.data.message);}else {
          console.log(error);
          setValue(error.response.datamessage)
        }
        
      });
    if (bookAdded) {
      history.push("/");
    }
  };

  return (<>
    <form id="addBookForm" onSubmit={onAddBookSubmit}>
     
      <div className="book-box">
      <h1 className="addHead">Add Book</h1>
        <p>
          <label htmlFor="title">Book Title</label>
          <input
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
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="genre">Book Genre</label>
          <input
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
            className="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </p>
        <button type="submit" form="addBookForm" className="btnSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </div>
</form>
<div className="imgSection">
  <img src={imageBook} alt="Book-Thought"></img>
</div>
      <style jsx>{`
        .addBookForm{
          width:100%;
        height: 100%;}
        .imgSection{
          right:0;
          position: absolute;
        }
      .imgSection img{
        position: fixed;
       top:100px;
        right:0;
        height:650px;
        width: 500px;
        border-left: 4px solid #3D1C0B;
      }
   .addHead{
     color: #F5CB79;
     text-align: center;
   }    
.book-box {
  color: #F5CB79;
width: 450px;
height: 600px;
background-color: black;
position: absolute;
text-align: center;
top: 150px;
left: 300px;
border: 2px solid black;
  border-radius: 10px;
}

.description{
  background-color: black;
  color: #F5CB79;
}
.description:focus {
  background-color: #F5CB79;
  color: black;
}
form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #F5CB79;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background-color: black;
 
}

form button:hover {
  background: #F5CB79;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #F5CB79, 0 0 25px #F5CB79, 0 0 50px #F5CB79,
    0 0 100px #F5CB79;
}

button span {
  position: absolute;
  display: block;
}

button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #F5CB79);
  animation: btn-anim1 1s linear infinite;
}
input{background-color: black;
color: #F5CB79; }
input:focus {
  background-color: #F5CB79;
  color: black;
}
@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #F5CB79);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #F5CB79);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #F5CB79);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

* {
  box-sizing: border-box;
}

/**************************************/

@media (min-width: 700px) {
  .form {
    width: 70%;
  }
}

form p {
  float: left;
  width: 49%;
}
form p:not(:nth-child(2n)) {
  margin-right: 2%;
}
form p:last-child {
  clear: both;
  width: 100%;
}
form p:nth-last-child(2) {
  clear: both;
  width: 100%;
}

/**************************************/

ul {
  list-style: none;
  padding: 0;
}

form label {
  display: block;
}

button,
input,
textarea {
  padding: 1em;
}

{.contain {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
  } 
 @media (min-width: 600px) {
    .contain {
      padding: 0;
    }
  } 

h3,
ul {
  margin: 0;
}

input:focus,
textarea:focus {
  outline: 3px solid #F5CB79;
}

input,
textarea,
button {
  width: 100%;
  border: 3px solid #F5CB79;
}
`}</style>
</>
  );
};

export default AddBookForm;
