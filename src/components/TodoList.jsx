import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({taskList, setTaskList}) => {

    const handleDelete = (id) => {
        setTaskList(prev =>
            prev.filter(task => task.id !== id));
    }

    const handleCompleted = (id) => {
        setTaskList(prev =>
            prev.map(task =>
                task.id === id
                    ? {...task, completed: !task.completed}
                    :task
            )
        )
    }


    return (
        <div className="todoList">
            <div className="todos">
                {taskList.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggle={handleCompleted}
                    onDelete={handleDelete}
                />
                ))}
            </div>
        </div>
    )
}

export default TodoList
