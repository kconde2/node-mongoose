import React from 'react';
import TodoContext from '../../context/TodoContext';

class TodoItemActions extends React.Component {
    static contextType = TodoContext;

    render() {
        const { todo } = this.props;

        return (
            <>
                <a
                    href="#complete"
                    onClick={() => this.context.completeTodo(todo)}>
                    Set complete
                </a>
                <a
                    href="#delete"
                    onClick={() => this.context.deleteTodo(todo)}>
                    Delete
                </a>
            </>
        );
    }
}

export default TodoItemActions;
