import { Component } from "react/cjs/react.production.min"
import Book from "../Book/Book"

class Favourites extends Component{
constructor(props){
    super(props)
}
    render(){
        return (
         <div id='favourites'>
             <h1 className='favourites-head'>My Favourite Books</h1>
            <Book />
            <style jsx>{`.favourites-head {
            text-transform: capitalize;
            width: 100%;
            border-bottom: 4px ridge #551a8b;
            background-color: #fbedd2;
            margin-top: 0;
            padding-left: 30px;
            color: #551A8B;
            font-family: "Brush Script MT", cursive;
          }`}</style>
        </div>
           )
    }

}
export default Favourites;