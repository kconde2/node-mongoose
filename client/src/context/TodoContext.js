import { createContext } from "react";

const TodoContext = createContext({
    todos: [],
    loadTodos: () => { },
    newTodo: () => { },
    deleteTodo: () => { },
    completeTodo: () => { }
});

export default TodoContext;
