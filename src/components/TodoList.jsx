import { useTodo } from '../hooks/useTodo'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useTodo();

    return (
        <div className="todos">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    task={todo}
                    onToggle={() => toggleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    )
}

export default TodoList