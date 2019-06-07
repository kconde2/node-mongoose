import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  state = {
    todos: [{ text: "todo 1" }, { text: "todo 2", checked: true }]
  };

  handleNew = (text) => {
    const todo = { text };

    this.setState({
        todos: [
            ...this.state.todos,
            todo,
        ]
    });
  };

  render() {
    return (
      <React.Fragment>
        <TodoForm onSubmit={this.handleNew}></TodoForm>
        <ul>
          {this.state.todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default TodoList;
