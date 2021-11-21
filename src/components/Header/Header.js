import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper">
      
        <ul id="navigation" class="navWrapper">
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
      </div>

      <style jsx>{`
        .nav-wrapper {
          display: flex;
         
        }
      
      `}</style>
    </nav>
  );
};
export default Header;
