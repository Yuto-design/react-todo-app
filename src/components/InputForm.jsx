import React from 'react'

const InputForm = ({taskList, setTaskList}) => {
    const [inputText, setInputText] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") return;

        setTaskList(prev => [
            ...prev,
            {
                id: Date.now(),
                text: inputText,
                completed: false
            }
        ])

        setInputText("");
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
            </form>
        </div>
    )
}

export default InputForm
