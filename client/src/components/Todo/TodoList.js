import React from "react";
import TodoItemContainer from "./TodoItemContainer";
import TodoContext from "../../../context/TodoContext";

const TodoList = () => <TodoContext.Consumer>
  {
    (context) => <ul>
      {context.todos.map((todo, index) => (
        <TodoItemContainer key={index} todo={todo} />
      ))}
    </ul>
  }
</TodoContext.Consumer>

export default TodoList;
