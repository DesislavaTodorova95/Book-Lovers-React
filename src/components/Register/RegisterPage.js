import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import ErrorsContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import './RegisterPage.css';
const RegisterPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRepass] = useState("");

  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (!userInfo) {
      localStorage.clear("sess-token");
    }
  }, [userInfo, history]);
  const { setValue } = useContext(ErrorsContext);
  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://murmuring-cliffs-61613.herokuapp.com/auth/register",
        { email, password, rePass },
        config
      );

      setUserInfo(JSON.stringify(data));

      localStorage.setItem("sess-token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("email", data.email);

      history.push("/");
    } catch (error) {
      setValue(error.response.data);
    }
  };

  return (
    <div className="register-box">
      <h2>Register</h2>
      <form onSubmit={onRegisterSubmit} id="submitForm">
        <div className="user-box">
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="rePass"
            onChange={(e) => {
              setRepass(e.target.value);
            }}
            value={rePass}
          />
          <label htmlFor="rePass">Repeat Password</label>
        </div>

        <button type="submit" form="submitForm" className="regBtnSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
     
       
      
    </div>
  );
};

export default RegisterPage;
