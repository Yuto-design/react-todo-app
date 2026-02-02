import React, {useContext} from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <div className="todos">
        {state.todos.map(todo => (
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
        </div>
    )
}

export default TodoList
