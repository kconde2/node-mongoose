import React, { useEffect, useContext, useRef, useMemo } from 'react';
import TodoContext from "../../context/TodoContext";
import TodoItem from './TodoItem';

const TodoList = () => {

  const context = useContext(TodoContext);
  const ref = useRef();

  useEffect(() => { // ComponentDidMount
    context.loadTodos();
    ref.current = true;
  }, []);

  useEffect(() => { //  ComponentDidUpdate
    if (ref.current) {
      // mon traitement
    }
  });

  return useMemo(() => <ul>
    {context.todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} />
    ))}
  </ul>, [context.todos]);
}

export default TodoList;
