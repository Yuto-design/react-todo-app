import React, {useEffect} from 'react';
import './App.css';
import Title from './components/Title';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  const [taskList, setTaskList] = React.useState([]);

  useEffect(() => {
    console.log("Task List Updated:", taskList);
  }, [taskList]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
