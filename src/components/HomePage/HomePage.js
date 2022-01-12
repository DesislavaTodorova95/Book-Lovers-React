import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import homeImage from "./static/home.jpg"
import './HomePage.css'
class HomePage extends Component {
  render() {
    const userEmail = localStorage.getItem('email');
    
    return (<>
    
      <div className="HomeWrapper">
      
        <h1>{userEmail ? userEmail +', ' : ''}Wellcome to BOOK-LOVERS platform</h1>
        <h2>
          Here You can add your favourite books, that you want to share with
          others, or find new ones for you to read
        </h2>
        
        <Link to="/books/allBooks">Catalog</Link>
        </div>
        <div className="imageDiv">
        <img src={homeImage} alt="bookshelf"></img>
       </div>
       
       
         
      
     </>
    );
  }
}

export default HomePage;
