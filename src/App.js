import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

import Footer from "./components/Footer/Footer";
import RegisterPage from "./components/Register/RegisterPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import Favourites from "./components/Favourites/Favourite";

import BookDetails from "./components/BookDetails/BookDetails";
import ErrorsContext from "./components/contexts/ErrorContext";
import UserContext from "./components/contexts/UserContext";
import React, { useState } from "react";

import ErrorComponent from "./components/ErrorComponent/ErrorComponenet";
import EditBook from "./components/EditBook/EditBook";
import AddBookForm from "./components/AddBookForm/AddBookForm";
import axios from "axios";
import baseUrl from "./services/api";

function App() {
  const [value, setValue] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
 
  // const logoutHandle = () => {
  //   localStorage.clear();
  //   setUserInfo(null);
    
  //  }


  return (
    <div id="root">
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <ErrorsContext.Provider value={{ value, setValue }}>
          <Header />
          <ErrorComponent></ErrorComponent>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/books/allBooks" exact component={CatalogPage} />
            <Route path="/books/details/:bookId" component={BookDetails} />
            <Route path="/books/edit/:bookId" component={EditBook} />
            <Route path="/auth/login" exact component={LoginPage} />
            <Route path="/auth/register" exact component={RegisterPage} />
            <Route path="/books/my-favourites" component={Favourites} />
            <Route path="/books/add-book" component={AddBookForm} />
            <Route path="/auth/logout" />
           <Route path='/books/delete/:bookId' render={({history, match})=>{
             axios.get(`${baseUrl}/books/delete/${match.params.bookId}`).then(data => console.log(data) ).catch(error=> setValue(error));
             history.push('/');
           }} />
          </Switch>
        </ErrorsContext.Provider>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
