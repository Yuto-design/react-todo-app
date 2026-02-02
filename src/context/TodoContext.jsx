import React, {createContext, useReducer} from 'react'
import {todoReducer, initialState} from '../reducer/todoReducer'

export const TodoContext = createContext(null);

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(
        todoReducer,
        initialState
    );

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
