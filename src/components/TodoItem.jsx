import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'

const TodoItem = ({ task }) => {
    const {
        toggleTodo,
        deleteTodo,
        updateTodo,
        editingId,
        startEdit,
        endEdit
    } = useTodo()

    const isEditing = editingId === task.id
    const isLocked = editingId !== null && !isEditing

    const [editText, setEditText] = useState(task.text)

    const handleSave = () => {
        if (!editText.trim()) return
        updateTodo(task.id, editText)
        endEdit()
    }

    const handleCancel = () => {
        setEditText(task.text)
        endEdit()
    }

    return (
        <div
            className={`todo
                ${isEditing ? 'editing' : ''}
                ${isLocked ? 'locked' : ''}
                ${task.completed ? 'completed' : ''}
            `}
        >
            {isEditing ? (
                <form
                    className="editForm"
                    onSubmit={e => {
                        e.preventDefault()
                        handleSave()
                    }}
                >
                    <input
                        className="editInput"
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                        autoFocus
                    />
                    <div className="edit-icons">
                        <button type="submit">
                            <i className="fa-solid fa-floppy-disk"></i>
                        </button>
                        <button type="button" onClick={handleCancel}>
                            <i className="fa-solid fa-backward"></i>
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <span
                        className="todoText"
                        onDoubleClick={() => {
                            if (!isLocked) startEdit(task.id)
                        }}
                    >
                        {task.text}
                    </span>

                    <div className="view-icons">
                        <button disabled={isLocked} onClick={() => toggleTodo(task.id)}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <button disabled={isLocked} onClick={() => deleteTodo(task.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoItem