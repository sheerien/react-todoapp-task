import React from "react";
import "../../assets/main.css";
import "./ListItem.css";
import { FaTrashAlt } from "react-icons/fa";

const ListItems = (props) => {
  const todos = props.todos;
  const isChecked = props.isChecked;

  const todosListItem = todos.map((todo, index) => {
    return (
      <div key={todo.id} className="list-item-comp row">
        <div className="list-item-check">
          <input
            type="checkbox"
            onClick={props.handelCheckBox}
            onChange={(e) => props.handelOnChangeIsCompleted(e, index)}
          />
        </div>
        <div className="list-item-data row">
          <div className="list-item-data-name">
            <span
              className="mx"
              style={{
                textDecoration: isChecked ? "line-through" : "none",
              }}>
              {todo.todoName}
            </span>
          </div>
          <div>
            <i onClick={() => props.handelRemoveTodo(index)}>
              <FaTrashAlt />
            </i>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="row"></div>
      {todos.length === 0 ? <h3>TODOS EMPTY LIST</h3> : todosListItem}
    </div>
  );
};

export default ListItems;
