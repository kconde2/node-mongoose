import React, { Component } from 'react';
import TodoContext from './TodoContext';

class TodoProvider extends Component {

    state = {
        todos: [{ text: "todo 1" }, { text: "todo 2", checked: true }],
        loadTodos: () => {
           this.setState({
                todos: [{ text: "todo 1" }, { text: "todo 2", checked: true }]
            });
        },
        newTodo: (todo) => {
            this.setState({
                todos: [
                    ...this.state.todos, todo,
                ]
            });
        },
        deleteTodo: (todo) => {
            this.setState({
                todos: this.state.todos.filter(item => {
                    return todo.text !== item.text;
                })
            });
        },
        completeTodo: (todo) => {
            this.setState({
                todos: this.state.todos.map(item => {
                    if (todo.text === item.text) {
                        item.checked = !item.checked;
                    }
                    return item;
                })
            })
        }
    }

    render() {
        return (
            <TodoContext.Provider value={this.state}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoProvider;
