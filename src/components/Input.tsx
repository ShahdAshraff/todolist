import '../styles/Input.css';
import { useState } from 'react';
import plusIcon from '../assets/plus.svg';

interface InputProps {
    addTodo: (text: string) => void;
}

export function Input({ addTodo }: InputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <div className="input-container">
            <input 
                type="text" 
                placeholder="Add a new task" 
                className="input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button onClick={handleAdd} className='AddButton'>
                <img src={plusIcon} alt="Add"/>
            </button>
        </div>
    )
}
