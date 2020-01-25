import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
//show
class App extends Component {
  state = {
    items: [
      { id: 1, title: "bakary" },
      { id: 2, title: "bakary" },
      { id: 3, title: "bakary" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handleChange");
  };
  handleSubmit = e => {
    console.log("handleSubmit");
  };
  ClearList = () => {
    console.log("Clear list");
  };
  handeDelete = id => {
    console.log(`handle delete ${id}`);
  };
  handeEdit = id => {
    console.log(`handle edit ${id}`);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">todo input</h3>
            </div>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <TodoList
              items={this.state.items}
              ClearList={this.ClearList}
              handeDelete={this.handeDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
