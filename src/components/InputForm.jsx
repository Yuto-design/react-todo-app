import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'

const InputForm = () => {
    const {addTodo} = useTodo();
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

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
