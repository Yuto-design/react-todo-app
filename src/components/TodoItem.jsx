import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'

const TodoItem = ({ task }) => {
    const { toggleTodo, deleteTodo, updateTodo } = useTodo();

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleSave = () => {
        updateTodo(task.id, editText);
        setIsEditing(false);
    };

    return (
        <div className={`todo ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <form
                    className="editForm"
                    onSubmit={e => {
                    e.preventDefault();
                    handleSave();
                    }}
                >
                    <input
                        className="editInput"
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        autoFocus
                    />
                    <div className="edit-icons">
                        <button onClick={handleSave}>
                            <i className="fa-solid fa-floppy-disk"></i>
                        </button>
                        <button onClick={() => setIsEditing(false)}>
                            <i className="fa-solid fa-backward"></i>
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <span
                        className="todoText"
                        onDoubleClick={() => setIsEditing(true)}
                    >
                        {task.text}
                    </span>

                    <div className="view-icons">
                        <button onClick={() => toggleTodo(task.id)}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <button onClick={() => deleteTodo(task.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoItem
