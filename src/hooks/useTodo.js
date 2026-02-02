import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error(
            'useTodo must be used within TodoProvider'
        )
    }

    const {state, dispatch} = context;

    const addTodo = (text => {
        dispatch({
            type: 'ADD_TODO',
            payload: text
        })
    })

    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }

    const toggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: id
        })
    }

    return {
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggleTodo
    }
}