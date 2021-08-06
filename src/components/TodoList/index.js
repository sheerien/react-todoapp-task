import React, { Component } from "react";
import "../../assets/main.css";
import ListItems from "../ListItems";
import TodoForm from "../TodoForm";
import "./TodoList.css";
class TodoList extends Component {
  state = {
    todos: [],
    newTodo: "",
    isChecked: false,
  };
  handelFormSubmit = (e) => {
    e.preventDefault();
    let todosLen = this.state.todos.length;
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          id: todosLen + 1,
          todoName: this.state.newTodo,
          isCompleted: this.state.isChecked,
        },
      ],
    });
  };
  handelChangeValue = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  handelCheckBox = (e) => {
    e.target.checked
      ? this.setState({
          isChecked: true,
        })
      : this.setState({
          isChecked: false,
        });
  };
  // handelCheckBox = (e) => {

  //   this.setState({
  //     e.target.checked?isChecked: true:isChecked: false
  //  })

  // };

  handelOnChangeIsCompleted = (e, index) => {
    const todoIsCompleted = this.state.todos.filter((todo) => {
      if (todo.id === index + 1) {
        todo.isCompleted = e.target.checked;
      }
      return todo;
    });
    this.setState({
      todos: todoIsCompleted,
    });
  };

  handelRemoveTodo = (index) => {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <section className="container">
        <div className="todo-list">
          <div className="todo-form">
            <TodoForm
              todos={this.state.todos}
              newTodo={this.state.newTodo}
              handelChangeValue={this.handelChangeValue}
              handelFormSubmit={this.handelFormSubmit}
            />
          </div>
          <div>
            <ListItems
              todos={this.state.todos}
              handelCheckBox={this.handelCheckBox}
              isChecked={this.state.isChecked}
              handelOnChangeIsCompleted={this.handelOnChangeIsCompleted}
              handelRemoveTodo={this.handelRemoveTodo}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default TodoList;
