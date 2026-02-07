import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'

const InputForm = () => {
    const { addTodo, isEditing } = useTodo();
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setError('There is a task being edited.')
            return
        };

        if (inputText.trim() === '') {
            setError('Please enter the task details.');
            return;
        }

        addTodo(inputText);
        setInputText('');
        setError('');
    }

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text"
                        onChange={(e) => {
                            setInputText(e.target.value)
                            setError('');
                        }}
                        value={inputText}
                        placeholder="Enter task details"/>
                <button>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
            </form>

            {error && (
                <p className="error-message">{error}</p>
            )}
        </div>
    )
}

export default InputForm
