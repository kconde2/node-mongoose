import React from 'react';
import './App.css';
import TodoList from './components/Todo/TodoList';
import TodoProvider from './context/TodoProvider';

const App = () => <TodoProvider>
  <TodoList />
</TodoProvider>

export default App;
