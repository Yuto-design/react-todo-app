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

    const filteredTodos = state.todos.filter(todo => {
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

    const updateTodo = (id, text) => {
        dispatch ({
            type: 'UPDATE_TODO',
            payload: { id, text }
        })
    }

    const startEdit = (id) => {
        dispatch({
            type: 'START_EDIT',
            payload: id
        })
    }

    const endEdit = () => {
        dispatch({
            type: 'END_EDIT',
        })
    }

    return {
        todos: filteredTodos,
        filter: state.filter,
        setFilter,
        startEdit,
        endEdit,
        addTodo: (text) =>
            dispatch({ type: 'ADD_TODO', payload: text }),
        deleteTodo: (id) =>
            dispatch({ type: 'DELETE_TODO', payload: id }),
        toggleTodo: (id) =>
            dispatch({ type: 'TOGGLE_TODO', payload: id }),
        updateTodo
    }
}