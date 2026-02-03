import React from 'react';
import { TodoProvider } from './context/TodoContext';
import './App.css';
import Title from './components/Title';
import InputForm from './components/InputForm';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="body">
        <Title />
        <InputForm />
        <Filter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
