import React from 'react'

const InputForm = ({dispatch}) => {
    const [inputText, setInputText] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === '') return;

        dispatch({
            type: 'ADD_TODO',
            payload: inputText
        });

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
