import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";

class HomePage extends Component {
  render() {
    return (
      <div className="HomeWrapper">
        <h1>Wellcome to BOOK-LOVERS platform</h1>
        <p>
          Here You can add your favourite books, that you want to share with
          others, or find new ones for you to read
        </p>

        <Link to="/all-books">Catalog</Link>

        <style jsx>{`
          .HomeWrapper {
            display: block;
            text-align: center;
            color: #FBEDD2;

          }
          .HomeWrapper h1{
            margin: 30px;
            padding: 20px;  
          }
          .HomeWrapper h2{
              padding: 10px
              margin 30px
          }
          .HomeWrapper a{
              text-align: center;
              width: 100px;
              background-color: #FBEDD2;
              height: 50px;
              border: 3px solid #551A8B;
              border-radius: 4px;
              margin-top: 20px;
          }
        `}</style>
      </div>
    );
  }
}

export default HomePage;
