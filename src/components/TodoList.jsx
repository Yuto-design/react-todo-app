import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos, dispatch}) => {
    return (
        <>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    task={todo}
                    onToggle={() =>
                        dispatch({
                            type: 'TOGGLE_TODO',
                            payload: todo.id
                        })
                    }
                    onDelete={() =>
                        dispatch({
                            type: 'DELETE_TODO',
                            payload: todo.id
                        })
                    }
                />
            ))}
        </>
    )
}

export default TodoList
