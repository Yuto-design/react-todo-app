import { TodoProvider } from '../features/todo/context/TodoContext';
import '../App.css';
import Title from '../features/todo/components/Title';
import InputForm from '../features/todo/components/InputForm';
import Filter from '../features/todo/components/Filter';
import TodoList from '../features/todo/components/TodoList';

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
