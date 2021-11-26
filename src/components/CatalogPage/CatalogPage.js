import { Component } from "react/cjs/react.production.min";

import Book from "../Book/Book";
class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  render() {
    return (
      <div class="book-list">
        <h1 className="catalog-head">All Books</h1>
        <Book />

        <style jsx>{`
          .catalog-head {
            text-transform: capitalize;
            width: 100%;
            border-bottom: 4px ridge #551a8b;
            background-color: #fbedd2;
            margin-top: 0;
            padding-left: 30px;
            color: #551A8B;
            font-family: "Brush Script MT", cursive;
          }
          .book-list {
            display: block;
          }
        `}</style>
      </div>
    );
  }
}
export default CatalogPage;
