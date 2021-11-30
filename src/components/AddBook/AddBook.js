import { Component } from "react/cjs/react.production.min";
import AddEditBookForm from "../AddEditBookForm/AddEditBookForm";

class AddBook extends Component{
    render(){return <div className="add-form">
    <h2>ADD BOOK</h2>
   <AddEditBookForm />
   <style jsx>{`.add-form {
  left: 37%;
  width: 400px;
  padding: 40px;

  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: black;
  position: relative;
}

.add-form h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #551a8b;
  text-align: center;
}`}</style>
  </div>
  }
}
export default AddBook;