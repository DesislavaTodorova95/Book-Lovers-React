import Header from "./components/Header/Header";
import { Switch ,Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

import Footer from "./components/Footer/Footer";
import RegisterPage from "./components/Register/RegisterPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import Favourites from "./components/Favourites/Favourite";
import AddBook from "./components/AddBook/AddBook";
import BookDetails from "./components/BookDetails/BookDetails";
import ErrorsContext from "./components/contexts/ErrorContext";
import UserContext from "./components/contexts/UserContext";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent/ErrorComponenet";
function App (){
 const [value, setValue]= useState(null)
  return (
    <div id="root">
      <UserContext.Provider value ={{userId: '', token: '' }}>
        <ErrorsContext.Provider value={{value, setValue}}>
     <Header />
     <ErrorComponent></ErrorComponent>
     <Switch>
      <Route  path="/" exact component={HomePage}/>
      <Route path="/books/allBooks" exact component={CatalogPage}/>
      <Route path="/books/details/:bookId" component={BookDetails}/>
      <Route  path= "/auth/login" exact component={LoginPage}/>
      <Route  path= "/auth/register" exact component={RegisterPage}/>
      <Route path="/books/my-favourites" component={Favourites}/>
       <Route path="/books/add-book" component={AddBook} />
     </Switch>
     </ErrorsContext.Provider>
        <Footer />
        </UserContext.Provider>
    </div>
  );

}

export default App;
