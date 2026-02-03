import './list.css';
import deleteIcon from './assets/delete.svg';

export function List({ todos, toggleTodo, deleteTodo }){
    return (
        <div className="list-container">
            <ul className="list">
                {todos && todos.map((todo) => (
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
        </div>
    )
}