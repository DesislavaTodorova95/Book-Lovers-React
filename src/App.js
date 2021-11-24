import Header from "./components/Header/Header";
import { Switch ,Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./components/Register/RegisterPage";

class App extends Component {
  render(){return (
    <div id="root">
        <Header />
     <Switch>
      <Route  path="/" exact component={HomePage}/>
      <Route  path= "/login" exact component={LoginPage}/>
      <Route  path= "/register" exact component={RegisterPage}/>
      
     </Switch>
      <Footer />
     
    </div>
  );}
}

export default App;
