import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoContext from '../context/TodoContext';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <TodoContext.Provider value={{ todos: [{ text: "todo 1" }, { text: "todo 2", checked: true }] }}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
