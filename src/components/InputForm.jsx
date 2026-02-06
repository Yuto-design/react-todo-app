import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'

const InputForm = () => {
    const { addTodo, isEditing } = useTodo();
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            alert('There is a task being edited.')
            return
        };

        if (inputText.trim() === '') {
            alert('Please enter the task details.');
            return;
        }

        addTodo(inputText);
        setInputText('');
    }

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setInputText(e.target.value)} value={inputText}/>
                <button>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
            </form>
        </div>
    )
}

export default InputForm
