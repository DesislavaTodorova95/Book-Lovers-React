
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import logo from "../../static/logo2.png";
import UserContext from "../contexts/UserContext";

const Header = () => {
const {userInfo, setUserInfo }= useContext(UserContext);
const [user, setUser]= useState(null);
useEffect(()=>{
setUser(userInfo)
}, [userInfo])
const logout = ()=>{
localStorage.clear();
setUserInfo(null);
}
  return (
    <div className="container">
      <img src={logo} className="logo" alt='bookImage'/>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" style={{display: user? 'block': "none"}} onClick={logout} to="/auth/logout">
              Logout
            </Link>
          </li>
          <li>
            <Link className="nav-link" style={{display: user? 'none': "block"}} to="/auth/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="nav-link" style={{display: user? 'none': "block"}} to="/auth/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav-link" style={{display: user? 'block': "none"}} to="/books/add-book">
              Add Book
            </Link>
          </li>
          <li>
            <Link className="nav-link" style={{display: user? 'block': "none"}} to="/books/my-favourites">
              My Favourites
            </Link>
          </li>
         <li>
           <Link className="nav-link" to="/books/allBooks">
             Catalog
           </Link>
         </li>
        
        </ul>
      </nav>

      <style jsx>{`li a {
          text-decoration: none;
        }
        .container {
          background: #f5cb79;
         
          text-align: center;
          z-index: 999;
          display: flex;
          margin: 0 auto;
          width: 100%;
          height: 120px;
          border-bottom:3px solid #551A8B;
         
        }
        nav{
        text-align: right; 
        position: center;
        }
        .logo {
        
          float: left;
          padding: 10px 0;
          }
         ul{
          float: right;
        }
        nav li{
         display: inline-block;
        float: right;
        margin-left: 70px;
         padding-top: 25px;
         position: relative;
        }
        .nav-link{
          color: #551A8B;
          font-size: 28px;
          font-family: "Brush Script MT", cursive;
          display: inline-block;
          width: 100%
          height: 5px;
          }
        a:hover{
         color: #A1033D
        }
        @media screen and (max-width: 580px) {
          .logo{display: none}
          .container {
    padding: 20px 10px !important; 
    height: auto;
    
         }
  ul{
    float:left;
  }
    nav a {
      width: 100px;
display: block;
text-align: center;
padding: 12px;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
float: left;
}
}  `}</style>
    </div>
  );
};
export default Header;
