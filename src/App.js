import React from 'react';
import { TodoProvider } from './context/TodoContext';
import './App.css';
import Title from './components/Title';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="body">
        <Title />
        <InputForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
