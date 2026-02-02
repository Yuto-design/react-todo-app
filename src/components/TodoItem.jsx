import React from 'react'

const TodoItem = ({task, onToggle, onDelete}) => {
    return (
        <div className={`todo ${task.completed ? 'completed' : ''}`}>
            <div className="todoText">
                <span>{task.text}</span>
            </div>
            <div className="icons">
                <button onClick={() => onToggle(task.id)}>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button onClick={() => onDelete(task.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoItem
