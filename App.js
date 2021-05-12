import React, { Component, Fragment } from "react";
import HeaderComponent from "./Component/HeaderComponent";
import ToDoinput from "./ToDoCOmponent/ToDoinput";
import ToDolist from "./ToDoCOmponent/ToDolist";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      item: "",
      items: [],
      editTodo: true,
    };
  }
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let new_item = {
      id: this.state.id,
      item_title: this.state.item,
    };
    console.log(new_item);
    this.setState({
      items: [...this.state.items, new_item],
      id: uuidv4(),
      item: "",
      editTodo: false,
    });
  };

  deleteTOdo = (id) => {
    let FilterContent = this.state.items.filter((item) => item.id !== id);
    console.log(FilterContent);
    this.setState({ items: FilterContent });
  };

  editTodo = (id) => {
    let editContent = this.state.items.filter((item) => item.id !== id);
    let selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: editContent,
      items: selectedItem.item,
      id: id,
      editTodo: true,
    });
  };








  render() {
    console.log(this.state.items);
    return (
      <div>
        <Fragment>
          <header>
            <HeaderComponent />
          </header>
          <main className="container bg-info">
            <ToDoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editTodo={this.state.editTodo}
            />
            <ToDolist
              items={this.state.items}
              handledelete={this.deleteTOdo}
              handleEdit={this.editTodo}
            />
          </main>

        </Fragment>
      </div>
    );
  }
}
export default App;