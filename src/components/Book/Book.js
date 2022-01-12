import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, {  useState } from "react/cjs/react.development";
import './Book.css';
const Book = ({_id,
  title, author, genre, description, imageUrl, likes, addedBy, comments,
})=>{
  
  const [showMore, setShowMore] = useState(false);
return(
<div className={showMore ? 'book book-flex': 'book'}>
  <div className="imgSectionBook">
        <img className="book-image" src={imageUrl} alt="Harry Potter 1st book Cover"/>
        <p className="author"> <small>By { author}</small></p>
  </div>     
 <div className='book-info'>
    <h1 className='book-title'><strong>{title}</strong></h1>
    <h6 className="genre">Genre: {genre}</h6>
       <h3>
      Desicription</h3>
      <span className="descriptionBook">
        <p>{showMore ? description : `${description.substring(0, 100)}`}</p>
        <button className="btn" onClick={()=>{setShowMore(!showMore)}}>{!showMore ? 'More': 'Less'}</button></span>
        <div className='btns-div'>
        
       <p>Likes</p>
          <p className="likes-counter"><i className="material-icons"><FaHeart /></i>{likes && likes.length >0? Number(likes.length): 0}</p></div>
         <Link to={`/books/details/${_id}`}>
         <button className='btn'>Details</button>
  </Link>
        
       
 </div>
   
 


</div>  
)
}
export default Book;