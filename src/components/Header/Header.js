import { Link } from "react-router-dom";
import logo from "../../static/logo.png";
const Header = () => {
  return (
    <div class="container">
      <img src={logo} class="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Register</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
          <li>
            <Link to="/">Add Book</Link>
          </li>
          <li>
            <Link to="/">My Favourites</Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
       
        li a {
          text-decoration: none;
        }
        .container {
          display: flex;
          margin: 0 auto;
          width: 100%;
          height: 120px;
         background: #f5cb79;
        }
        .logo {
        
          float: left;
          padding: 10px 0;
          }
        nav ul{
          float:right;
        
       }
        nav li{
         display: inline-block;
              float: right;
        margin-left: 70px;
         padding-top: 25px;
        }
        a{
          color: #551A8B;
          font-size: 28px;
          font-family: "Brush Script MT", cursive;
         
        }
        a:hover{
         color: #A1033D
        }
      `}</style>
    </div>
  );
};
export default Header;
