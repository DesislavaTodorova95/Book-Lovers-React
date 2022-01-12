import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react/cjs/react.development";
import logo from "../../static/logo2.jpg";
import UserContext from "../contexts/UserContext";
import './Header.css'
const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [user, setUser] = useState(null);

  if (!userInfo) {
    localStorage.clear("sess-token");
  }
  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);
 
  const logout = () => {
    localStorage.clear();
    setUserInfo(null);
  };

  return (
    <div className="container-header">
      <img src={logo} className="logo" alt="bookImage" />
      <nav className="headerNavigation">
        <ul className="ulList">
          {user ? (
            <>
              <li className="list">
                <Link className="nav-link" onClick={logout} to="/auth/logout">
                  Logout
                </Link>
              </li>
              <li className="list">
                <Link className="nav-link" to="/books/add-book">
                  Add Book
                </Link>
              </li>{" "}
              <li className="list">
                <Link className="nav-link" to="/books/my-favourites">
                  My Favourites
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="list">
                <Link className="nav-link" to="/auth/register">
                  Register
                </Link>
              </li>
              <li className="list">
                <Link className="nav-link" to="/auth/login">
                  Login
                </Link>
              </li>
            </>
          )}
          <li className="list">
            <Link className="nav-link" to="/books/allBooks">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>

     

    </div>
  );
};
export default Header;
