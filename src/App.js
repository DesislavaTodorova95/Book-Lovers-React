import Header from "./components/Header/Header";
import { Switch ,Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./components/Register/RegisterPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import Favourites from "./components/Favourites/Favourite";
import AddBook from "./components/AddBook/AddBook";

class App extends Component {
  render(){return (
    <div id="root">
        <Header />
     <Switch>
      <Route  path="/" exact component={HomePage}/>
      <Route path="/all-books" component={CatalogPage}/>
      <Route  path= "/login" exact component={LoginPage}/>
      <Route  path= "/register" exact component={RegisterPage}/>
      <Route path="/my-favourites" component={Favourites}/>
       <Route path="/add-book" component={AddBook} />
     </Switch>
        <Footer />
     
    </div>
  );}
}

export default App;
