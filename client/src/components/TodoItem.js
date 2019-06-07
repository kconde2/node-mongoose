import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li
        style={{
          opacity: this.props.checked ? 0.5 : 1
        }}
      >
        {this.props.todo.text}
      </li>
    );
  }
}

export default TodoItem;
