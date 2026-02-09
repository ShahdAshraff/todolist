import '../styles/List.css';
import deleteIcon from '../assets/delete.svg';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface ListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export function List({ todos, toggleTodo, deleteTodo }: ListProps) {
    return (
        <div className="list-container">
            {todos.length === 0 ? (
                <p className="no-tasks">No tasks yet</p>
            ) : (
                <ul className="list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="list-item">
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="checkbox"
                            />
                            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                            <button 
                                onClick={() => deleteTodo(todo.id)} 
                                className="delete-btn"
                            >
                                <img src={deleteIcon} alt="Delete" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
