import React from "react";
import TodoItemActions from "./TodoItemActions";
import TodoContext from "../../context/TodoContext";

class TodoItem extends React.Component {

  static contextType = TodoContext;

  render() {
    return (
      <li
        style={{ opacity: this.props.todo.checked ? 0.5 : 1 }}
      >
        {this.props.todo.text}

        <TodoItemActions todo={this.props.todo} />
      </li>
    );
  }
}

export default TodoItem;
