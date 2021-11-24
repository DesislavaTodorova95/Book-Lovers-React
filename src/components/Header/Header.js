import { Link } from "react-router-dom";
import logo from "../../static/logo2.png";
const Header = () => {
  return (
    <div className="container">
      <img src={logo} className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/my-favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
       
        li a {
          text-decoration: none;
        }
        .container {
          background: #f5cb79;
          position fixed;
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
        width: 80% 
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
        a{
          color: #551A8B;
          font-size: 28px;
          font-family: "Brush Script MT", cursive;
          display: block;
          width: 100%
          height: 5px;
          }
        a:hover{
         color: #A1033D
        }
      `}</style>
    </div>
  );
};
export default Header;
