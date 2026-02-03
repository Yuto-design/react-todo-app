import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error(
            'useTodo must be used within TodoProvider'
        )
    }

    const { state, dispatch } = context;

    const filterdTodos = state.todos.filter(todo => {
        if (state.filter === 'active') {
            return !todo.completed;
        }
        if (state.filter === 'completed') {
            return todo.completed;
        }
        return true;
    })

    const setFilter = (filter) => {
        dispatch ({
            type: 'SET_FILTER',
            payload: filter
        })
    }

    return {
        todos: filterdTodos,
        filter: state.filter,
        setFilter,
        addTodo: (text) =>
            dispatch({ type: 'ADD_TODO', payload: text }),
        deleteTodo: (id) =>
            dispatch({ type: 'DELETE_TODO', payload: id }),
        toggleTodo: (id) =>
            dispatch({ type: 'TOGGLE_TODO', payload: id }),
    }
}