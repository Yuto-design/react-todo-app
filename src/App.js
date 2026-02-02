import React, {useReducer, useEffect} from 'react';
import {todoReducer, initialState} from './reducer/todoReducer';
import './App.css';
import Title from './components/Title';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(
    todoReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      'todos',
      JSON.stringify(state.todos)
    );
  }, [state.todos]);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      JSON.parse(saved).forEach(todo => {
        dispatch({type: 'ADD_TODO', payload: todo.text});
      });
    }
  }, []);

  return (
    <div className="body">
      <Title />
      <InputForm dispatch={dispatch} />
      <TodoList
        todos={state.todos}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
