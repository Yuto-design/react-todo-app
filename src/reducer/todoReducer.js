export const initialState = {
    todos: [],
    filter: 'all'
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false
                    }
                ]
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(
                    todo => todo.id !== action.payload
                )
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? {...todo, completed: !todo.completed}
                        : todo
                )
            }

        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }

        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, text: action.payload.text }
                        : todo
                )
            }

        default:
            return state;
    }
}