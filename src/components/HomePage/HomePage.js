import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import homeImage from "./static/home.jpg"
class HomePage extends Component {
  render() {
    const userEmail = localStorage.getItem('email');
    
    return (<>
    
      <div className="HomeWrapper">
      
        <h1>{userEmail ? userEmail +', ' : ''}Wellcome to BOOK-LOVERS platform</h1>
        <p>
          Here You can add your favourite books, that you want to share with
          others, or find new ones for you to read
        </p>
        
        <Link to="/books/allBooks">Catalog</Link>
        </div>
        <div className="imageDiv">
        <img src={homeImage} alt="bookshelf"></img>
       </div>
       
        <style jsx>{`
          .HomeWrapper {
            margin-top: 100px;
           width:100%;
            display: block;
            text-align: center;
            color: #FBEDD2;

          }
          .imageDiv{
       
         
            width:100%;
           
          }
          .imageDiv img{
            height: 800px;
width: 100%;
          }
          .HomeWrapper h1{
            margin: 30px;
            padding: 20px;  
          }
          .HomeWrapper h2{
              padding: 10px
              margin 30px
          }
          .HomeWrapper a{
            text-align: center;
width: 100px;
background-color: #FBEDD2;
height: 50px;
border: 3px solid #551A8B;
border-radius: 4px;
margin-top: 30px;
padding-top: 3px;
text-decoration: none;
font-family: "Brush Script MT", cursive;
padding-top: 8px;
font-size: 27px;
display: inline-block;
          }
        `}</style>
     </>
    );
  }
}

export default HomePage;
