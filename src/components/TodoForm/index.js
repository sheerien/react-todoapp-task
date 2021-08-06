import React, { Component } from "react";
import { FaList } from "react-icons/fa";
import "../../assets/main.css";
import "./TodoForm.css";
class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handelFormSubmit}>
          <div className="input-icon">
            <i className="icon">
              <FaList />
            </i>
          </div>
          <input
            type="text"
            placeholder="Enter Your A Task ..."
            autoComplete="off"
            value={this.props.newTodo}
            onChange={this.props.handelChangeValue}
          />
        </form>
      </div>
    );
  }
}
export default TodoForm;
